import React from "react";
import { Text } from "@visx/text";
import { scaleLog } from "@visx/scale";
import { ParentSize } from "@visx/responsive";
import Wordcloud from "@visx/wordcloud/lib/Wordcloud";

/**
 * The spiral type options.
 */
type SpiralType = "archimedean" | "rectangular";

/**
 * The word data type.
 */
export interface WordData {
  text: string;
  value: number;
  color?: string;
}

/**
 * The Word Cloud properties.
 */
interface WordCloudProps {
  words: WordData[];
  spiralType?: SpiralType;
  withRotation?: boolean;
}

/**
 * The colors to display in the word cloud.
 */
const colors = ["#049ccd", "#00AD50", "#4262f2", "#c56ca2"];
/**
 * The Word Cloud Component.
 */
export default function WordCloud({
  words,
  spiralType = "archimedean",
  withRotation = false,
}: WordCloudProps) {
  /** FUNCTIONS */

  /**
   * The Font Scale.
   */
  const getFontScale = scaleLog({
    domain: [
      Math.min(...words.map((w) => w.value)),
      Math.max(...words.map((w) => w.value)),
    ],
    range: [10, 100],
  });

  /**
   * The fixed value generator.
   */
  const fixedValueGenerator = () => 0.5;

  // The font size settler.
  const fontSizeSetter = (datum: WordData) => getFontScale(datum.value);

  /**
   * Determines the rotation degree.
   */
  function getRotationDegree() {
    const rand = Math.random();
    const degree = rand > 0.5 ? 60 : -60;
    return rand * degree;
  }

  /** RETURN */

  return (
    <>
      <ParentSize>
        {({ width, height }) => (
          <Wordcloud
            words={words}
            width={width}
            height={height}
            fontSize={fontSizeSetter}
            font={"Montserrat"}
            fontWeight={"bold"}
            padding={6}
            spiral={spiralType}
            rotate={withRotation ? getRotationDegree : 0}
            random={fixedValueGenerator}
          >
            {(cloudWords) =>
              cloudWords.map((w, i) => (
                <Text
                  key={w.text}
                  fill={colors[i % colors.length]}
                  textAnchor={"middle"}
                  transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
                  fontSize={w.size}
                  fontFamily={w.font}
                >
                  {w.text}
                </Text>
              ))
            }
          </Wordcloud>
        )}
      </ParentSize>
      <style jsx>{`
        .wordcloud {
          display: flex;
          flex-direction: column;
          user-select: none;
        }
        .wordcloud svg {
          margin: 1rem 0;
          cursor: pointer;
        }

        .wordcloud label {
          display: inline-flex;
          align-items: center;
          font-size: 14px;
          margin-right: 8px;
        }
        .wordcloud textarea {
          min-height: 100px;
        }
      `}</style>
    </>
  );
}

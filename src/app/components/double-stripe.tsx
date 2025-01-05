/**
 * The Double Stripe component props.
 */
export type DoubleStripeProps = {
  outerClass?: string;
  innerClass?: string;
  containerClass?: string;
  height?: number;
};

/**
 * The Double Stripe component.
 */
export const DoubleStripe = ({
  outerClass = "",
  innerClass = "bg-jps-cream",
  containerClass = "",
  height = 48,
}: DoubleStripeProps) => (
  <div
    className={`w-full h-fit absolute top-30 transition-opacity ${containerClass}`}
  >
    <div
      style={{ height: `${height / 3}px` }}
      className={`bg-jps-green dark:bg-jps-cream w-full z-10 ${outerClass}`}
    />
    <div
      style={{ height: `${height / 3}px` }}
      className={`bg-jps-cream dark:bg-black w-full z-10 ${innerClass}`}
    />
    <div
      style={{ height: `${height / 3}px` }}
      className={`bg-jps-green dark:bg-jps-cream w-full z-10 ${outerClass}`}
    />
  </div>
);

import "@lwc/synthetic-shadow";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css";
import SimpleApp from "./simple";
import NestedApp from "./nested";
import HorizontalAlignSpaceApp from "./horizontalAlignSpace";
import HorizontalAlignSpreadApp from "./horizontalAlignSpread";
import VerticalAlignCenterApp from "./verticalAlignCenter";
import VerticalAlignStretchApp from "./verticalAlignStretch";
import PullToBoundaryApp from "./pullToBoundary";


// A layout can include layout items as columns.
export const Simple = () => SimpleApp;
Simple.storyName = "Simple Layout";

// A layout item can contain nested layouts.
export const Nested = () => NestedApp;
Nested.storyName = "Nested Page Layout";

// Position layout items horizontally across the container, with space before, between, and after the items.
export const HorizontalAlignSpace = () => HorizontalAlignSpaceApp;
HorizontalAlignSpace.storyName = "Layout with a Horizontal Align (Space)";

// Position layout items horizontally across the container, with space between the items.
export const HorizontalAlignSpread = () => HorizontalAlignSpreadApp;
HorizontalAlignSpread.storyName = "Layout with a Horizontal Align (Spread)";

// Position layout items vertically in the center of the container.
export const VerticalAlignCenter = () => VerticalAlignCenterApp;
VerticalAlignCenter.storyName = "Layout with a Vertical Align (Center)";

// Stretch out layout items vertically to fill the container.
export const VerticalAlignStretch = () => VerticalAlignStretchApp;
VerticalAlignStretch.storyName = "Layout with a Vertical Align (Stretch)";

// Pull layout items to the edges of the container.
export const PullToBoundary = () => PullToBoundaryApp;
PullToBoundary.storyName = "Layout with PullToBoundary Attribute";

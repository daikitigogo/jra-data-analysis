type breakpointsType = number | "xs" | "sm" | "md" | "lg" | "xl";
class Breakpoint {

  private readonly breakpoints = [
    { point: 'sm', up: { smUp: true }, down: { xsDown: true } },
    { point: 'md', up: { mdUp: true }, down: { smDown: true } },
    { point: 'lg', up: { lgUp: true }, down: { mdDown: true } },
  ];

  readonly point: breakpointsType;
  readonly upAttr: { smUp?: boolean; mdUp?: boolean; lgUp?: boolean };
  readonly downAttr: { xsDown?: boolean; smDown?: boolean; mdDown?: boolean };

  constructor(private readonly i: number) {
    const breakpoint = this.breakpoints[i];
    this.point = breakpoint.point as breakpointsType;
    this.upAttr = breakpoint.up;
    this.downAttr = breakpoint.down;
  }
};

export const breakpoint = new Breakpoint(1);
export const sidebarWidth = 300;
export const appTitle = 'JRAデータ分析';

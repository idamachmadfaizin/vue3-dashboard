export class BreakpointHelper {
    width: number
    breakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    isSm: boolean
    isMd: boolean
    isLg: boolean
    isXl: boolean
    is2xl: boolean

    constructor() {
        this.width = document.documentElement.clientWidth

        this.breakpoint = this.bp()

        this.isSm = this.breakpoint === 'sm'
        this.isMd = this.breakpoint === 'md'
        this.isLg = this.breakpoint === 'lg'
        this.isXl = this.breakpoint === 'xl'
        this.is2xl = this.breakpoint === '2xl'
    }

    private bp(): 'sm' | 'md' | 'lg' | 'xl' | '2xl' {
        const width = this.width
        return width < 768
            ? 'sm'
            : width < 1024
                ? 'md'
                : width < 1280
                    ? 'lg'
                    : width < 1536
                        ? 'xl'
                        : '2xl'
    }
}
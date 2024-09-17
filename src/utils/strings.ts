function strExists(value: string | undefined | null): boolean {
    return typeof value === 'string' && value.trim().length > 0;
}

export {strExists}
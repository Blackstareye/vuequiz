export default

    function sample<T>(arr: T[]): T {
    if (arr.length === 0) {
        throw new Error("Cannot sample from an empty array");
    }
    const index = Math.floor(Math.random() * arr.length);
    return arr[index]!;
};

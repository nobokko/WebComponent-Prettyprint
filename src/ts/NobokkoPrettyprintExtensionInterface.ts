export default interface NobokkoPrettyprintExtensionInterface {
    beforeSplitCode(code:string) : string;
    beforeJoinCode(lines:Array<string>) : Array<string>;
}
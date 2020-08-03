import NobokkoPrettyprintExtensionInterface from '../NobokkoPrettyprintExtensionInterface';

export default class Yaml implements NobokkoPrettyprintExtensionInterface {
    beforeSplitCode(code: string): string {
        return code;
    }
    beforeJoinCode(lines: Array<string>): Array<string> {
        return lines
            .flatMap((line) => {
                return line.replace(/(#.*$)/, '<nobokko-prittyprint-comment>$1</nobokko-prittyprint-comment>');
            });
    }

}
import { parseFile } from '../../../common/file-parser/file-parser'

export class EmpireDto {
    parsedSource: object

    constructor(source: string) {
        try {
            this.parsedSource = parseFile(source)
        } catch (e) {

        }
    }
}
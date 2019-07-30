export class GameWithCover {
    constructor(
        public id: number,
        public name: string,
        public platform: number,
        public cloudinary_id: string,
        public cover: string) {}
}

export class Standings {
    constructor( 
        public id: number,
        public goals_against: number,
        public goals_for: number,
        public played: number,
        public behinds_against: number,
        public against: number, 
        public name: string,
        public percentage: number,
        public rank: number,
        public wins: number,
        public draws: number,
        public losses: number,
        public pts: number){}
}

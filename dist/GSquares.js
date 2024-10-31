var s={d:(e,i)=>{for(var t in i)s.o(i,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:i[t]})},o:(s,e)=>Object.prototype.hasOwnProperty.call(s,e)},e={};s.d(e,{bW:()=>t,Zt:()=>o,M6:()=>i,FA:()=>r});class i{constructor(){this.isOccupied=!1,this.tile=null}AddTile(s){this.isOccupied=!0,this.tile=s}}class t{constructor(s,e){this.sizeX=8,this.sizeY=8,this.sizeX=s,this.sizeY=e,this.squares=this.createSquares()}createSquares(){return Array.from({length:this.sizeX},(()=>Array.from({length:this.sizeY},(()=>new i))))}IsTileOccupied(s){return this.squares[s[0]][s[1]].isOccupied}CanTileBePlacedAtPos(s,e){for(const i of s.shape){const s=e[0]+i[0],t=e[1]+i[1];if(s>=this.sizeX||s<0||t>=this.sizeY||t<0||this.IsTileOccupied([s,t]))return!1}return!0}PlaceTile(s,e){s.isPlaced?console.log(`Tile ${s} is already placed`):this.CanTileBePlacedAtPos(s,e)?s.shape.forEach((i=>{const t=e[0]+i[0],r=e[1]+i[1];console.log(t,r),this.squares[t][r].AddTile(s),s.isPlaced=!0})):console.log(`Tile ${s} cannot be placed at position ${e}`)}GetSquare(s,e){return this.squares[s][e]}PrintBoard(){let s="";for(let e=0;e<this.sizeY;e++){s="";for(let i=0;i<this.sizeX;i++)s+=" "+(this.squares[i][e].isOccupied?"X":"O");console.log(s)}}}class r{constructor(s){this.isPlaced=!1,this.shape=s}Rotate(){const s=[];this.shape.forEach((e=>{const i=e[0],t=-e[1],r=i;s.push([t,r])})),this.shape=s}Flip(){const s=[];this.shape.forEach((e=>{const i=-e[0],t=e[1];s.push([i,t])})),this.shape=s}}class o{constructor(){this.sizeX=6,this.sizeY=6,this.nTilesBlocked=7,this.board=new t(this.sizeX,this.sizeY),this.tiles=[new r([[0,0]]),new r([[0,0],[0,1]]),new r([[0,0],[0,1],[0,2]]),new r([[0,0],[0,1],[0,2],[0,3]]),new r([[0,0],[0,1],[1,1]]),new r([[0,0],[0,1],[1,1],[1,0]]),new r([[0,0],[0,1],[1,0],[1,-1]]),new r([[0,0],[0,1],[1,0],[-1,0]]),new r([[0,0],[-1,0],[0,1],[0,2]])],this.AddBlockers()}AddBlockers(){let s,e,i=this.nTilesBlocked;for(;i>0;)s=a(0,this.sizeX),e=a(0,this.sizeY),this.board.GetSquare(s,e).isOccupied||(this.board.GetSquare(s,e).isOccupied=!0,i--)}IsBoardFull(){return!!this.board.squares.every((s=>s.every((s=>s.isOccupied))))}}function a(s,e){const i=Math.ceil(s),t=Math.floor(e);return Math.floor(Math.random()*(t-i)+i)}var c=e.bW,h=e.Zt,l=e.M6,n=e.FA;export{c as Board,h as Game,l as Square,n as Tile};
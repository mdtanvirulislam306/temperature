export default function BoilingVerdict({temp=0}){
    if (temp>=100) {
        return 'The Water would Boile'
    }else{
        return 'The Water would not Boile'
    }
   
}
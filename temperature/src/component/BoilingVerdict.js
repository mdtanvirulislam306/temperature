export default function BoilingVerdict({celsius=0}){
    if (celsius>=100) {
        return 'The Water would Boile'
    }else{
        return 'The Water would not Boile'
    }
   
}
import { Dimensions, Pressable, Text } from "react-native"

const {height: PAGE_HEIGHT}  = Dimensions.get('screen');
const CARD_HEIGHT = (PAGE_HEIGHT * 0.9) - 180

const FullCard = ()=>{

    return (
        <Pressable style={{height: CARD_HEIGHT,}} className="w-full rounded-3xl bg-gray-100 mt-4">
            
        </Pressable>
    )
}


export default FullCard
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import posts from "../../../../assets/assets/data/posts.json"
import PostListItem from "../../../components/PostListItem";

export default function DetailedPost() {
    const { id } = useLocalSearchParams()

    const detailedPost = posts.find(post => post.id === id)

    if (!detailedPost) {
        return <Text>Post Not Found</Text>
    }

    return (
        <View>
            <PostListItem post={detailedPost} isDetailedPost/>
        </View>
    )
}
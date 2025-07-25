import { Text, View, FlatList } from "react-native";
import PostListItem from "../../components/PostListItem";
import posts from "../../../assets/assets/data/posts.json"

export default function HomeScreen() {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item}/>}
      />
    </View>
  );
}

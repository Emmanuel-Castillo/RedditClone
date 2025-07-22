import { Text, View, Image } from "react-native";
import posts from "../../../assets/assets/data/posts.json";
import { formatDistanceToNowStrict } from "date-fns";
export default function HomeScreen() {
  const post = posts[0];
  return (
    <View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Image
          source={{ uri: post.group.image }}
          style={{ width: 15, height: 15, borderRadius: 10 }}
        />
        <Text style={{ fontWeight: "bold" }}>{post.group.name}</Text>
        <Text style={{ color: "grey" }}>
          {formatDistanceToNowStrict(new Date(post.created_at))}
        </Text>
      </View>
    </View>
  );
}

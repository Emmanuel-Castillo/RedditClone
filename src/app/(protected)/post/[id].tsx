import { useLocalSearchParams } from "expo-router";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import posts from "../../../../assets/assets/data/posts.json";
import PostListItem from "../../../components/PostListItem";
import comments from "../../../../assets/assets/data/comments.json";
import CommentListItem from "../../../components/CommentListItem";
import { useState } from "react";

export default function DetailedPost() {
  const { id } = useLocalSearchParams();
  const [comment, setComment] = useState<string>("");

  const detailedPost = posts.find((post) => post.id === id);

  const postComments = comments.filter(
    (comment) => comment.post_id === "post-1"
  );

  if (!detailedPost) {
    return <Text>Post Not Found</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      {/* Scrollable flat list with the post at the top */}
      <FlatList
        data={postComments}
        renderItem={({ item }) => <CommentListItem comment={item} />}
        ListHeaderComponent={
          <PostListItem post={detailedPost} isDetailedPost />
        }
      />
      <View
        style={{
          borderBottomColor: "lightgray",
          padding: 10,
          backgroundColor: "white",
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 4,
        }}
      >
        <TextInput
          placeholder="Join the conversation"
          style={{ backgroundColor: "#E4E4E4", padding: 5, borderRadius: 5 }}
          value={comment}
          onChangeText={setComment}
          multiline
        />
        <Pressable
          style={{
            backgroundColor: "#0d469b",
            borderRadius: 15,
            marginLeft: "auto",
            marginTop: 15,
          }}
        >
          <Text
            style={{
              color: "white",
              paddingVertical: 5,
              paddingHorizontal: 10,
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Reply
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

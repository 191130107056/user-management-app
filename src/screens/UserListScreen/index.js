import React, { useEffect } from "react";
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, increamentPage } from "../../redux/slices/userSlice";
import { colors, strings } from "../../theme";
import { USER_DETAIL_SCREEN } from "../../constants/Stack";
import { styles } from "./styles";
import Header from "../../components/Header";

const UserListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { users, loading, hasNextPage, page, error } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, []);

  const handleLoadMore = async () => {
    if (!loading && hasNextPage) {
      await dispatch(increamentPage());
      await dispatch(fetchUsers(page));
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(USER_DETAIL_SCREEN, { user: item })}
      style={styles.userContainer}
    >
      <Image
        source={{ uri: item.picture.thumbnail }}
        style={styles.userImage}
      />
      <View>
        <Text
          style={styles.userName}
        >{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
        <Text style={styles.userEmail}>{`${item.email}`}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header heading={strings.users} isBack={false} />
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          data={users}
          keyExtractor={(item) => item.login.uuid}
          renderItem={renderItem}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            loading ? (
              <ActivityIndicator size="large" color={colors.black} />
            ) : (
              !hasNextPage && <Text style={styles.userEmail}>No More Data</Text>
            )
          }
        />
      )}
    </View>
  );
};

export default UserListScreen;

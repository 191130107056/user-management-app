import React from "react";
import { View, Text, Image } from "react-native";
import Header from "../../components/Header";
import { styles } from "./styles";
import { strings } from "../../theme";
import LabelValue from "../../components/LabelValue";

const UserDetailScreen = ({ navigation, route }) => {
  const { user } = route.params;
  return (
    <View style={styles.container}>
      <Header
        heading={strings.userDetails}
        isBack={true}
        onBack={() => navigation.goBack()}
      />
      <View style={styles.subContainer}>
        <Image source={{ uri: user.picture.large }} style={styles.image} />
        <Text
          style={styles.name}
        >{`${user.name.title} ${user.name.first} ${user.name.last}`}</Text>
        <LabelValue label={strings.email} value={user.email}/>
        <LabelValue label={strings.phone} value={user.phone}/>
        <LabelValue label={strings.cell} value={user.cell}/>
        <LabelValue
          label={strings.location}
          value={`${user.location.city}, ${user.location.state}, ${user.location.country}`}
        />
        <LabelValue
          label={strings.username}
          value={user.login.username}
        />
        <LabelValue
          label={strings.age}
          value={user.dob.age}
        />
        <LabelValue
          label={strings.registered}
          value={new Date(user.registered.date).toLocaleDateString()}
        />
      </View>
    </View>
  );
};

export default UserDetailScreen;

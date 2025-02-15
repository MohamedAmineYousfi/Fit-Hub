import * as React from 'react';
import { ScrollView ,StyleSheet ,Text,Image,  FlatList, View , TouchableOpacity, TextInput, Dimensions} from 'react-native';
 import { Avatar, Button, Card, Title, Paragraph,Colors } from 'react-native-paper';
 import tw from "tailwind-react-native-classnames"


 

const viewConfigRef = {viewAreaCoveragePercentTreshold:95}

import { RouteProp } from '@react-navigation/native';

   const Recipe: React.FC<{
        route: RouteProp<{
            params: {
                recipeId: number,
                recipeTitle: string,
                imageUrl: string,
                likes: number,
                content: string,
                comments:string
            }
        }, 'params'>
    }> = ({ route: { params } }) => {
        return (
                 
            <View style={styles.container}>
    <View  style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ display: 'flex', flex: 8, padding: 10, justifyContent: 'center'}}> 
            <Image source={{uri: params.imageUrl}} style={styles.image}  />
                <Text style={{ fontSize: 36, fontWeight: '500'}}>{params.recipeTitle}</Text>
                <Text style={{ fontSize: 16, color: '#616161'}}>{params.comments}</Text>
                <Text style={{ fontSize: 16, color: '#616161'}}>{params.likes}Likes</Text>
                <Text style={{ fontSize: 20, color: '#000000'}}>{params.content}</Text>
            </View>
            </View>
          <View style = {tw`h-2/3`}>
          

</View>
    {/* <Card.Content style ={tw``}>
    
      <Title style = {tw` text-white text-4xl`}> {params.recipeTitle}</Title>    
       <Paragraph style = {tw`text-xl text-white pt-6`}>{params.content} </Paragraph>
       <Text style = {tw`text-xl pt-6 text-gray-900`}>{params.likes}</Text>
       <Text style = {tw`text-xl text-gray-900`}>{params.created_at}</Text>
    </Card.Content> */}
   
   
      </View>
   );
        }

    export default Recipe



const styles = StyleSheet.create({
    container: {     
        display: 'flex',
        flex: 1, 
        // width: Dimensions.get('screen').width - 20,
        margin: 10,
        borderRadius: 20,
        backgroundColor: '#FFF',
        height: 100,
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: '#E5E5E5',
        flexDirection: 'row'
      
    },
    navigation: { flex: 2, backgroundColor: 'red' },
    image:{
      
        height: 230 ,
        alignItems : 'center',
        resizeMode: 'cover' ,
        marginVertical : 10 ,
      },
    body: { flex: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' },
    footer: { flex: 1, backgroundColor: 'cyan' }
    })
    
import { View, Text, TouchableOpacity,Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function DiscoverCard({place}) {
    const [liked,setLiked] = useState(false);
    console.log(place.image);
  return (
    <View >
      <View style={{
        display:"flex",
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    
      }}>
        <View>
        <Text style={{
            fontFamily:'outfit-bold',
            fontSize:15,
            marginBottom:5
        }}>{place.name}</Text>
        <View style={{
            display:"flex",
            flexDirection:'row',
            }}>
            <Ionicons name="location-outline" size={18} color="black" />
            <Text style={{
                marginLeft:4,
                fontFamily:'outfit',
                textDecorationLine:'underline'
            }}>{place.location}</Text>

        </View>
        </View>
        <TouchableOpacity onPress={()=>{setLiked(!liked)}} style={{
            backgroundColor:Colors.BG_LOGIN,
            padding:10,
            borderRadius:20,
            borderStyle:'solid',
            borderWidth:2,
            display:'flex',
            flexDirection:'row'
        }}>
            {!liked &&(<Text style={{
                fontFamily:'outfit-medium'
            }}>Save </Text>)}
            {liked &&(<Text style={{
                fontFamily:'outfit-medium'
            }}>Saved </Text>)}

            {liked && (
                <Text>❤️</Text>
            )}
            {/* {!liked && (
                <Text>🤍</Text>
            )} */}
            
        </TouchableOpacity>
       
      </View>
      <View style={{
        paddingTop:15
      }}>
        <Text style={{
            fontFamily:'outfit-medium',color:Colors.textlight
        }}>{place.description}</Text>
        <Text style={{fontFamily:'outfit-light2',color:Colors.PRIMARY,fontWeight:'500', paddingTop:10}}>Great Things to Do</Text>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
       
            
        <FlatList
        style={{
          marginRight:5
        }}
        data={place.thingsToDo}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item ,index}) => (
        
          <Text style={{
            fontFamily:'outfit',
            marginTop:5
          }}>{index+1}. {item}</Text>
      
      )}
      />
    

        <Image  source={{ uri: place.image } } style={{height:100,borderRadius:5,width:'50%',height:'100%'}}></Image>
        </View>
      
        
      </View>
    </View>
  )
}
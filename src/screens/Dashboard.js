import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function Dashboard({ navigation }) {
  
  
  
  return (
    <Background>
      <Logo />

      <Header>Kidz:</Header>

      <Paragraph>--- placeholder for text here ---</Paragraph>
      <text>--- get all books test below ---</text>
      <Text>{JSON.stringify(getAllBooks())}</Text>
      <button
        mode="outlined"
        onPress={() =>
          navigation.navigate({ routes: [{ name: 'DevelopmentDataScreen' }] })
        }
      >
        --- button(s) here for each kid that has been added, showing kids names ---
      </button>

      <Button
        mode="outlined"
        onPress={() =>
          navigation.navigate({ routes: [{ name: 'AddKidScreen' }] })
        }
      >
        --- Button to add a kid here ---
      </Button>

      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout (move somewhere else)
      </Button>
    </Background>
  )
}

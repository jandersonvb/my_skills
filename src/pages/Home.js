import React, { useState, useEffect } from 'react'

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList
} from 'react-native'

import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState([])
  const [gretting, setGretting] = useState('')

  function handleAddNewSkill() {
    setMySkills([...mySkills, newSkill])
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGretting('Bom Dia!')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Boa tarde!')
    } else {
      setGretting('Boa Noite!')
    }
  }, [])

  return (
    <>
      <View style={styles.container}>
        

        <Text style={styles.title}>Bem-vindo, Janderson!</Text>
        <Text style={styles.greetings}>{gretting}</Text>

        <TextInput
          style={styles.input}
          placeholder="Nova Skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} />

        <Text style={[styles.title, { marginVertical: 50 }]}>
          Minhas Skills:
        </Text>


        <FlatList
          data={mySkills}
          keyExtractor={item => item}
          renderItem={({ item }) => <SkillCard skill={item} />}
        />

      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 18,
    marginTop: 30,
    borderRadius: 7
  },
  greetings: {
    color: '#FFF'
  }
})

export { Home }
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { initializeDB } from './src/database/initializeDB';
import { delDate, getAllDate, getDateSelected, insertDate } from './src/database/visitsRepository';

export default function App() {

  const [markedDates, setMarkedDates] = useState({});
  const [upCalendar, setUpCalendar] = useState(false)
  useEffect(() => {
    async function initDB() {
      initializeDB()
    }
    initDB()
  }, [])

  useEffect(() => {
    async function preencheDatas() {
      const DATAS = {}
      const datas = await getAllDate()
      datas.forEach((value) => {
        DATAS[value.date] = { selected: true, marked: true, selectedColor: 'green' };
      })
      setMarkedDates(DATAS)
    }
    preencheDatas()
  }, [upCalendar])

  async function handleDelDate(id){
    await delDate(id)
    setUpCalendar(!upCalendar)
  }

  async function registerNow(dateParameter) {
    
    let date = new Date()
    const day = date.getDate()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const usadate = `${year}-${month}-${day}`
    
    if(dateParameter == null){
      const existe = await getDateSelected(usadate)
      if(existe == false){
        insertDate(usadate)
      }else{
        Alert.alert("","Hoje ja está marcado.")
      }
    }else{
      insertDate(dateParameter)

    }
    setUpCalendar(!upCalendar)
  }

  async function handleSelectDate(date){
    const result = await getDateSelected(date)
    if(result !== false){
      Alert.alert("Deseja exluir marcação ?",'',[
        {
          text:'Sim',
          onPress: ()=>handleDelDate(result)
        },
        {
          text:'Não'
        }
      ]
    )
    }else(
      Alert.alert("Marcar data,",`Deseja marcar o dia ${date.slice(8,10)} ?`,[
        {text: "Sim",
          onPress: ()=>registerNow(date)
        },{
          text:'Não'
        }
      ])
    )
  }

  function quantRef() {
    // const quantDays = get
    return Object.keys(markedDates).length
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle} >
        <Text style={styles.title} >Registro Refeição</Text>
        <Text style={styles.icon}>🍽</Text>
      </View>

      <View style={styles.body} >
        <View style={styles.calendarContainer} >
          <Calendar enableSwipeMonths={true} onMonthChange={(select)=>console.log(select.month)} onDayLongPress={(daySelect) => handleSelectDate(daySelect.dateString)}
            markedDates={markedDates}
          >
          </Calendar>
        </View>
        <View style={styles.controlContainer} >
          <Text style={styles.count} >🍴 x {quantRef()} </Text>
          <View style={styles.control} >
            <TouchableOpacity onPress={() => registerNow()} >
              <Text style={styles.icon2} >
                👍
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 15,
    width: "100%",
    height: '10%',
    backgroundColor: 'black',
  },
  icon: {
    fontSize: 55,
  },
  icon2: {
    fontSize: 100,
  },
  body: {
    width: '100%',
    flexGrow: 1,
  },
  title: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 35,
  },
  calendarContainer: {
    height: 300,
    width: '95%',
    alignSelf: "center",
    borderRadius: 10,
  },
  controlContainer: {

    flexGrow: 1,
  },
  count: {
    height: 45,
    borderRadius: 10,
    color: "#FFF",
    backgroundColor: "black",
    margin: 10,
    textAlign: 'right',
    fontSize: 30,
    paddingHorizontal: 10,
  },
  control: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

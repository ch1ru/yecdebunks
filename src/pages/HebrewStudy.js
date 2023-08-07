import React, { useEffect, useState } from 'react'
import PageTransition from '../components/PageTransition'
import { IoSearchOutline } from 'react-icons/io5'
import { WordTile } from '../components/WordTile'
import Concordance from '../components/Concordance'
import Amos from '../HebrewBible/Tanach/Books/Amos.xml'
import Genesis from '../HebrewBible/Tanach/Books/Genesis.xml'
import Exodus from '../HebrewBible/Tanach/Books/Exodus.xml'
import Leviticus from '../HebrewBible/Tanach/Books/Leviticus.xml'
import Numbers from '../HebrewBible/Tanach/Books/Numbers.xml'
import Deuteronomy from '../HebrewBible/Tanach/Books/Deuteronomy.xml'
import Ecclesiastes from '../HebrewBible/Tanach/Books/Ecclesiastes.xml'
import Esther from '../HebrewBible/Tanach/Books/Esther.xml'
import Ezekiel from '../HebrewBible/Tanach/Books/Ezekiel.xml'
import Ezra from '../HebrewBible/Tanach/Books/Ezra.xml'
import Habakkuk from '../HebrewBible/Tanach/Books/Habakkuk.xml'
import Haggai from '../HebrewBible/Tanach/Books/Haggai.xml'
import Hosea from '../HebrewBible/Tanach/Books/Hosea.xml'
import Isaiah from '../HebrewBible/Tanach/Books/Isaiah.xml'
import Jeremiah from '../HebrewBible/Tanach/Books/Jeremiah.xml'
import job from '../HebrewBible/Tanach/Books/Job.xml'
import Joel from '../HebrewBible/Tanach/Books/Joel.xml'
import Jonah from '../HebrewBible/Tanach/Books/Jonah.xml'
import Joshua from '../HebrewBible/Tanach/Books/Joshua.xml'
import Judges from '../HebrewBible/Tanach/Books/Judges.xml'
import Kings1 from '../HebrewBible/Tanach/Books/Kings_1.xml'
import Kings2 from '../HebrewBible/Tanach/Books/Kings_1.xml'
import Lamentations from '../HebrewBible/Tanach/Books/Lamentations.xml'
import Malachi from '../HebrewBible/Tanach/Books/Malachi.xml'
import Micah from '../HebrewBible/Tanach/Books/Micah.xml'
import Nahum from '../HebrewBible/Tanach/Books/Nahum.xml'
import Daniel from '../HebrewBible/Tanach/Books/Daniel.xml'
import Chronicles1 from '../HebrewBible/Tanach/Books/Chronicles_1.xml'
import Chronicles2 from '../HebrewBible/Tanach/Books/Chronicles_2.xml'
import Nehemiah from '../HebrewBible/Tanach/Books/Nehemiah.xml'
import Obadiah from '../HebrewBible/Tanach/Books/Obadiah.xml'
import Proverbs from '../HebrewBible/Tanach/Books/Proverbs.xml'
import Psalms from '../HebrewBible/Tanach/Books/Psalms.xml'
import Ruth from '../HebrewBible/Tanach/Books/Ruth.xml'
import Samuel1 from '../HebrewBible/Tanach/Books/Samuel_1.xml'
import Samuel2 from '../HebrewBible/Tanach/Books/Samuel_2.xml'
import SongOfSongs from '../HebrewBible/Tanach/Books/Song_of_Songs.xml'
import Zechariah from '../HebrewBible/Tanach/Books/Zechariah.xml'
import Zephaniah from '../HebrewBible/Tanach/Books/Zephaniah.xml'
import axios from 'axios'
import XMLParser from 'react-xml-parser';
import { Chapters, Headings } from '../HebrewBible/Tanach/Chapters'
import { useParams } from 'react-router-dom'

function HebrewStudy() {

    const [bookLocation, setBookLocation] = useState('')
    const [chapterLocation, setChapterLocation] = useState(1)
    const [searchText, setSearchText] = useState("");
    const [book, setBook] = useState([])

    const { bookid } = useParams();

    const getXML = async (file) => {
      axios.get(file, {
        "Content-Type": "application/xml; charset=utf-8"
     })
      .then((response) => {
        var xml = new XMLParser().parseFromString(response.data);    // Assume xmlText contains the example XML
        setBook(xml.children)
      });
    }

    useEffect(() => {
      var file
      var name = bookid.toLowerCase()

      switch(name) {
        case 'amos': 
          file = Amos;
          break;
        case 'genesis':
          file = Genesis;
          break;
        case 'exodus':
          file = Exodus;
          break;
        case 'leviticus':
          file = Leviticus;
          break;
        case 'deuteronomium':
          file = Deuteronomy;
          break;
        case 'numeri':
          file = Numbers;
          break;
        case 'josua':
          file = Joshua;
          break;
        case 'judices':
          file = Judges;
          break;
        case 'iob':
          file = job;
          break;
      }  
      getXML(file)

    }, []);
    
  return (
    <PageTransition>
    <div>
      <section class="p-8 pt-32">
      <h1 className=' text-center text-3xl font-bold'>{book[0]?.children[4].value}</h1>
      <h2 className='text-center text-xl mb-16'>{book[0]?.children[0].value}</h2>
      {
          book[chapterLocation]?.children.map((verse, idx) => {
            return <div className='flex flex-row-reverse gap-2 mt-6 pr-8'>{Headings[idx]}{verse.children.map(word => {
              return <WordTile item={word.value} />
            })}</div>
          })
      }
      </section>

    </div>
    </PageTransition>
    
  )
}

export default HebrewStudy
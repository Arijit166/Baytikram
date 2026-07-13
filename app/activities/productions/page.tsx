'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ImageManifestProvider, SlotImage, useManifest } from '@/components/SlotImage'
import { ProductionCard } from '@/components/ProductionCard'
import { AddProductionForm } from '@/components/AddProductionForm'
import type { Production } from '@/lib/models/production'

const productions = [
  {
    id: 1,
    titleEn: 'Shiri Bhenge Surjo',
    titleBn: 'সিঁড়ি ভেঙ্গে সূর্য',
    year: 'First Show 7th October 2001',
    credits: ['Dramaturge – Indranath Bandopadhye', 'Director- Apurba Mukhoti'],
    synopsis:
      "People of the middle class often fail to reach their goals due to various restraining ties. However, when oppression strikes directly, the very same individual seeks to shatter those bonds and merge into the mainstream. The play aims to portray the arduous struggle involved in this process.",
    actors:
      'Apurba Mukhoti, Prabir Bramhachari, Tarun Digar, Sanjoy Dutta, Chanchal Kar, Ajoy Chakraborty, Sudip Santra, Santi Bangal, Pratima Saren, Soma Samanta, Deba Roy',
  },
  {
    id: 2,
    titleEn: 'Otit Bartaman',
    titleBn: 'অতীত বর্তমান',
    year: '2002',
    credits: [
      "Inspired by Anton Chekhov's 'Swan Song', and Ajitesh Bandopadhyay's 'Nana Ranger Din'",
      'Written and Directed– Apurba Mukhoti',
    ],
    synopsis:
      "An artist's final cry—or the swan song. An established actor has fallen asleep in the green room after a performance, having consumed alcohol. The rest of the cast and crew have all gone home. In the dead of night, he stands alone on stage, holding a lit candle. Just then, Harihar, the prompter, enters. The two converse about the lives they have left behind. Then, Mahim Chatterjee tests himself to see just how capable he still is of acting.\n\nOver 150 performances have been completed across North Bengal and Kolkata.",
    actors: 'Apurba Mukhoti, Ashoke Halder',
  },
  {
    id: 3,
    titleEn: 'Karna Kunti Sangvad',
    titleBn: 'কর্ণ কুন্তী সংবাদ',
    year: '2003',
    credits: ['Dramaturge- Rabidranath Tagore', 'Director- Deba Roy'],
    synopsis:
      "Karna and Kunti are two figures from the Mahabharata, bound by the ties of mother and son. Karna was cast adrift in the waters at birth because Kunti had conceived him while still unwed. As time passed, that very son returned as an adversary, facing her other five sons in a great war. On the eve of the battle with Arjuna, Kunti came forward to assert her maternal claim and sought to take away his protective armor; knowing full well that this would mean his death, Karna nonetheless surrendered it to his mother. The struggle faced by mothers of illegitimate children remains just as relevant in society today; the crowded abortion clinics bear witness to this. Driven by the fear of social stigma, a mother may terminate the pregnancy or abandon the newborn in a trash bin. This forms the central theme of the play.",
    actors: 'Deba Roy, Sukla Nayek',
  },
  {
    id: 4,
    titleEn: 'Sanrashi',
    titleBn: 'সাঁড়াশী',
    year: '2003',
    credits: ['Written and Directed by Deba Roy'],
    synopsis:
      "It is no longer merely a jail, but a correctional facility—a place where individuals convicted of various crimes coexist. This play is woven from the realities, stories, and incidents of prison life, where the reasons behind their crimes and the events unfolding within the walls seem to merge into one. Whether viewing society from within the prison or the prison from the outside, the two appear to be reflections of each other. In the play's climax, trust, hope, and expectations shatter, as an overwhelming sense of chaos consumes everything.",
    actors:
      'Pinku Saha, Sutapa Dutta, Biswajit Ghosh, Arnab Bhattacharya, Niranjan Halder Sanjoy Dutta, Chanchal Kar, Samar Dutta, Sipra Paul,',
  },
  {
    id: 5,
    titleEn: 'Bhat',
    titleBn: 'ভাত',
    year: '2004',
    credits: ['Story by Poritosh Talukder', 'Written and Directed by- Deba Roy'],
    synopsis:
      "Bisho is a man living on the margins of society. His household consists of his wife, Sohagi, and their daughter, Bona. His wife works as a domestic helper in other people's homes, while Bisho works as a manual laborer. Their young daughter, Bona, does not go to school; instead, she spends her days wandering about. Her father is addicted to 'bidi', and she often picks up discarded 'bidi' butts—partially smoked and tossed away by others—from the roadside. His wife is unable to go to work due to illness and can barely eat; the entire family has gone without food for three days. Bisho searches for work but finds none; eventually, hoping for a meal, he runs errands at a tea stall, yet the shopkeeper gives him nothing. Upon returning home, he finds that Bona has scavenged some rice from a dumping ground for his parents; they eat the food, and after consuming the stale meal, they all vomit and die...",
    actors:
      'Chanchal Kar, Tapati Paul , Rumi Bose, Debesh Sarkar, Sanjoy Saha, Niranjan Mondal, Pinku Saha, Soma Roy, Sipra Paul. Payel Das, Sukanta Seal.',
  },
  {
    id: 6,
    titleEn: 'Kalobag',
    titleBn: 'কালোব্যাগ',
    year: '2005',
    credits: ['Dramaturge – Sabar Roy', 'Director- Deba Roy'],
    synopsis:
      "A sense of excitement has gripped the crowd at Kanai-da's tea stall, centered around a mysterious black bag—the owner of which remains unknown. Meanwhile, although the crowd at the stall swells, sales do not increase. A local man named Jatin Bagchi arrives and stirs up speculation about the bag; even the police, upon their arrival, do not dare to open it. Eventually, the bag vanishes—slipping away unnoticed right under everyone's noses. Through this symbolic bag, a picture of the prevailing political and social landscape emerges.",
    actors:
      'Sudipta Guha, Suman Guha, Sanjib Sengupta, Astik Naiya, Niranjan Mondal, Sonali Paul, Sanjoy Dutta, Deba Roy, Sanjoy Saha,',
  },
  {
    id: 7,
    titleEn: 'Favourite Bou',
    titleBn: 'ফেবারিট বউ',
    year: '2006',
    credits: ['Dramaturge – Sabar Roy', 'Director- Deba Roy'],
    synopsis:
      "Rudrapratap's wife, Samjukta, participated in a reality show and was honored with the title of 'Favorite Daughter-in-Law,' a milestone that paved the way for her to become a celebrity. However, the show required husbands to participate alongside their wives; during the competition, Rudrapratap met with an accident that caused him to lose his ability to speak, leaving him confined to the house. Meanwhile, their only daughter, Mou, falls in love with a wealthy young man. As the story unfolds, their family is forced to confront a harrowing truth...",
    actors:
      'Sudipta Guha, Suman Guha, Sanjib Sengupta, Astik Naiya, Niranjan Mondal, Sonali Paul, Sanjoy Dutta, Deba Roy',
  },
  {
    id: 8,
    titleEn: 'Pharrheziasth',
    titleBn: 'ফারেজিয়াস্ত',
    year: '2006',
    credits: ['Written and Directed by Tamal Bose', 'Advisor and Acting- Deba Roy'],
    synopsis:
      "Pharrheziasth is a professor who does not fear confronting the truth. Civil society once seeks to interview such a man. In the course of this interview, Pharrheziasth answers every question with complete candor. However, not everyone appreciates the truth, and death begins to loom over his life...",
    actors: 'Deba Roy, Sabar Roy, Sonali Paul, Tamal Bose',
  },
  {
    id: 9,
    titleEn: 'Bite',
    titleBn: 'বাইট',
    year: '2007',
    credits: [
      "Inspired By Samir Dasgupta's Ekti Kukurer Sreni Choritra",
      'Edited and Directed by Deba Roy',
    ],
    synopsis:
      "The protagonist of this play is a dog. The play portrays human society and politics from the dog's perspective. The dog closely observes the behavior of people across various social strata and the prevailing class disparities. It highlights the tendency to fawn over the wealthy and powerful while neglecting the poor and helpless. Through the eyes of the dog, the way society bows down to money is depicted using a blend of humor and sharp wit.",
    actors: 'Sanjoy Dutta, Deba Roy, Astik Naiya, Sonali Paul, Dinobondhu Naiya,',
  },
  {
    id: 10,
    titleEn: 'Bhagaban Dot Dot',
    titleBn: 'ভগবান ডট ডট',
    year: '2007',
    credits: ['Dramaturge - Sabar Roy', 'Directed by Deba Roy'],
    synopsis:
      "God has descended from the heavens into a canal-side slum. Banka, a laborer from the slum, encounters God while returning home late at night in a drunken stupor; unable to believe his eyes, he unleashes a torrent of vile abuse. Meanwhile, hearing the commotion, some local youths rush to the scene. However, before the situation can escalate further, God falls into the clutches of Banka's formidable wife. Eventually, she is convinced of His true identity, and everyone gathers to ask this God for various boons... at one point... God conducts a survey and returns to heaven. Did the people of that slum really receive a boon?",
    actors:
      'Deba Roy, Soma Mukherjee, Sonali Paul, Astik Naiya, Debesh, Pradip Saha, Mousumi Mitra,',
  },
  {
    id: 11,
    titleEn: 'Kidnap Kando',
    titleBn: 'কিডন্যাপ কান্ড',
    year: '2008',
    credits: ['Dramaturge - Sabar Roy', 'Directed by Deba Roy'],
    synopsis:
      "Ram, the beloved grandson of a wealthy family, lives with his grandparents. When Ram is suddenly kidnapped, his grandparents are devastated. The kidnappers demand a ransom, pressuring the grandfather to bring his grandson back at any cost. As the grandfather cool-headedly unravels the mystery behind the kidnapping and confronts the truth, he makes a shocking discovery: the culprit is someone from within their own inner circle.",
    actors:
      'Debesh Sarkar, Gouresh Sarkar, Sarbojit Roy, Sourav Majumder, Ganesh Kumar, Rony, Debangi Mitra, Soma Mukherjee, Deba Roy,',
  },
  {
    id: 12,
    titleEn: '2973190',
    titleBn: '',
    year: '2008',
    credits: ['Dramaturge - Sabar Roy', 'Directed by Deba Roy'],
    synopsis:
      "A real estate broker elevates his social status through the business of buying and selling properties, often using cunning tactics to close deals with clients. His fortunes take a dramatic turn when he receives a call from a foreign queen wishing to purchase the entire country. Overjoyed and overwhelmed, he is dazzled by the prospect of such a massive windfall—an opportunity beyond his wildest dreams. However, the very next moment, a realization dawns on him: if the entire country is sold off, where will he live? The play concludes amidst this dilemma.",
    actors:
      'Sanjoy Dutta, Subrata Ghosh, Kanai Ray, Astok Naiya, Soma Mukherjee, Dinobondhu Naiya , Rita Dolui, Deba Roy.',
  },
  {
    id: 13,
    titleEn: 'Char Akswar',
    titleBn: 'চার অক্ষর',
    year: '2009',
    credits: [
      "Story- Moni Mukhopadhye's Ganotantro O Gopal Kahar'",
      'Dramatized and Direction- Deba Roy',
    ],
    synopsis:
      "The main character of this play 'Gopal' is a marginal farmer. This impoverished farmer was arrested by the police on suspicion of terrorism and beaten severely in police custody. As a result he lost his left arm. He wanted to convince the police that he had done nothing wrong. While being beaten in police custody, he was told that he had destroyed the country's democracy - even though he did not know at all that democracy... Thus he was acquitted and released from jail without his left hand. What did he do next? He has lost his family- children and wife - but he is looking for one person - who is he?",
    actors: 'Astik Naiya, Suman Guha, Ayan Roy, Sanjoy Dutta, Biplab Paul, Sutapa Dutta, Deba Roy',
  },
  {
    id: 14,
    titleEn: 'Kunda Phooler Mala',
    titleBn: 'কুন্দ ফুলের মালা',
    year: '2020',
    credits: [
      "Inspired by Tagore's 'Raktakarabi' and Amal Roy' 'Shab jatra'",
      'Written by Mainak Sengupta',
      'Directed by Deba Roy',
    ],
    synopsis:
      "Revisiting Nandini from 'Raktakarabi'. Over time, the hues of 'Raktakarabi' have shifted; the burden of ruling power has fallen upon Nandini. Today, Nandini fears the King. The play is crafted around this very narrative—a story that recurs time and again as the ages turn. The ruler's colors may change, but the character remains the same.",
    actors:
      'Mrinal Kanti Mukherjee, Disha Dey, Barun Kayal, Astik Kumar Naiya, Dulal Adhikari. Sanchayan Ghosh, Deba Roy.',
  },
  {
    id: 15,
    titleEn: 'Sharbanggo Sundar',
    titleBn: 'সর্বাঙ্গসুন্দর',
    year: '2022',
    credits: [
      'Drama by Sabar Roy',
      'Directed by Deba Roy',
    ],
    synopsis:
      "The dramatic retelling of the Mahabharata story, centered on the character of Hidimba, is exquisitely crafted. This narrative seeks to refute—through reasoned argument—the misconceptions held by the public regarding her character. She is a woman torn between grief for her son and love for her husband, Bhima—a character whose story is chronicled in the Puranas. Her beauty is portrayed as flawless and sublime.",
    actors:
      'Baby Sen,  Mintu Mondal, Sandip Roy, Tarun Roy, Santanu Roy, Santanu Biswas, Disha Dey',
  },
  {
    id: 16,
    titleEn: 'Jampuri Jamjamat',
    titleBn: 'যমপুরী জমজমাট',
    year: '2024',
    credits: [
      "Inspired by Dinabondhu Mitra's Jmalaya Jibanto Manush",
      'Written and Directed by Deba Roy',
    ],
    synopsis:
      "Kudoram, a destitute man with no ties, one day comes across a funeral bier adorned with flowers while returning home. He takes some of the flowers, lies down on the bier, and falls asleep while thinking of his beloved. Just then, two messengers of Yama arrive to collect the body. Upon reaching the gates of Yama's realm, they realize they have mistakenly brought back a living person instead of the deceased. Once there, Kudoram seizes control of Yama's kingdom by threatening to file a false lawsuit against the Lord of Death. Having lost his job, Yama turns to Vishnu for help; he approaches Brahma and Mahadev one by one, and together they rush to Yamapuri to see the living human being there. What happened next? Did Kuroram stay there, or did he return?",
    actors:
      'Astik Kumar Naiya, Dulal Adhikari, Barun Kayal, Dipankar Banerjee, Anindya Dutta Roy, Tapan Bhattacharya, Sandip Roy, Sanchayan Ghosh, Sanjoy Das, Prabir Dey, Dinobondhu Naiya, Suman Banerjee, Arko Das, Arkan Banerjee, Shubhasree Dutta, Gracy Chakraborty, Reebeka, Deba Roy.',
  },
  {
    id: 17,
    titleEn: 'Le Jhilli',
    titleBn: '',
    year: '2024',
    credits: ['Written and Directed by Deba Roy'],
    synopsis:
      'This play is crafted in the style of street theatre. A group of young people, using specific rhythms and props, weave together various stories from their lives. These narratives combine to form a cohesive play, which can be staged in any format.',
    actors:
      'Dulal Adhikari, Astik Naiya, Prabir Dey, Arkan Banerjee, Arko Das, Sanjoy Das, Subhasree Dutta, Gracy Chakraborty, Deba Roy.',
  },
  {
    id: 18,
    titleEn: 'Durneety Darpan',
    titleBn: 'দুর্নীতি দর্পণ',
    year: '2025',
    credits: ['Written and Directed by Deba Roy'],
    synopsis:
      "This play is crafted in the style of street theatre, centering on the Indian Constitution and its impact on the lives of ordinary people. During the performance, administrative authorities intervene to monitor the proceedings, causing the narrative to shift; the core truth remains elusive, and whenever the real issue does surface, the dramatic action dissolves into farce. Corruption has become an inevitable part of social life—something none of us can escape, whether we wish to or not. Yet, this play seeks to explore the terrifying implications this unchecked corruption holds for future generations.",
    actors:
      'Prabir Dey, Dipankar Banerjee, Astik Naiya, Arkan Banerjee, Arko Das, Sanjoy Das, Deba Roy, Gracy Chakraborty, Akash Roy.',
  },
  {
    id: 19,
    titleEn: 'Mahabidya Adhikontu',
    titleBn: 'মহাবিদ্যা অধিকন্তু',
    year: '2025',
    credits: [
      "Inspired by Samaresh Mazumder's Story 'Mahakarma'",
      'Written and Diected by Deba Roy',
    ],
    synopsis:
      "Satyadas—an expert in the art of theft—lives the life of an ordinary man alongside his wife, Kumudini, and their only child, Dharmadas. Although some have suspected his illicit trade, no one has ever managed to catch him; his methods were simply that flawless. Meanwhile, Kumudini refuses to have their child supported by money earned through theft; she wants him to receive an education. To fund his studies, she takes on sewing work in her spare time, in addition to managing all the household chores. Dharma does indeed enroll in a prestigious college, but once there, he gets drawn into college politics and eventually falls into the clutches of a political mafia; meanwhile, this downward spiral in her son's life sparks a conflict between Satya and Dharma, leaving the mother distraught and torn between the two relationships.",
    actors:
      'Dulal Adhikari, Arkan Banerjee, Dipankar Banerjee, Astik Naiya, Sanjoy Das, Prabir Dey, Goutam Sinha, Gracy Chakraborty, Deba Roy',
  },
  {
    id: 20,
    titleEn: 'Apekhsha',
    titleBn: 'অপেক্ষা',
    year: '2025',
    credits: ['Written and Diected by Deba Roy'],
    synopsis:
      'A man is waiting in a park for his ex-girlfriend. Before she arrives, a playwright appears and strikes up a conversation with him; once the woman joins them, the dialogue deepens, and amidst stories of their respective struggles in life, each of them is compelled to confront the truth. When they fail to truly recognize the people living under the same roof as themselves, they—with the open sky as their only canopy—immerse themselves in the lived realities of one another.',
    actors:
      'Dipankar Banerjee, Prabir Dey, Sanjoy Das, Astik Naiya, Deba Roy, Gracy Chakraborty, Tama Paul.',
  },
  {
    id: 21,
    titleEn: 'E Parobashe',
    titleBn: 'এ পরবাসে',
    year: '2025',
    credits: ['Dramaturge - Sabar Roy', 'Directed by Deba Roy'],
    synopsis:
      'Ratan, a rickshaw puller, spends his days ferrying passengers from one end of the city to the other while constantly drinking and hurling abuse at the people he encounters. Caught in the relentless grind of this daily routine, he has all but forgotten his own past—the fact that he once had a family, a romance, and a home of his own. Yet, when he is deeply intoxicated, memories rise up from the depths of his mind—memories of the anguish caused by his inability to father a child, the pain of his infertility, and the reason his wife eventually left him.',
    actors: 'Deba Roy, Arkan Banerjee, Sanjoy Das, Astik Naiya, Gracy Chakraborty, Tama Paul',
  },
  {
    id: 22,
    titleEn: 'Mon Paboner Nao',
    titleBn: 'মন পবনের নাও',
    year: '2026',
    credits: ['Written and Diected by Deba Roy'],
    synopsis:
      'A psychiatrist conducts research on the human mind at a mental health treatment center, where he treats a constant stream of new patients and conducts experiments on them. Amidst the dramatic setting, various characters appear and share their stories, forcing him to bear the weight of their anguish. Unable to fathom the depths of that suffering, the doctor grows weary, and depression eventually consumes him as well.',
    actors:
      'Deba Roy, Arkan Banerjee, Sanjoy Das, Rahul Das, Kuntal Paul, Sankar Bhakta, Rathi Roy, Swagata , Prerona Chowdhuri, Tani Paul,',
  },
]

function ProductionsInner() {
  const { isAdmin } = useManifest()
  const [extra, setExtra] = useState<Production[]>([])

  const loadExtra = () => {
    fetch('/api/productions', { cache: 'no-store' })
      .then((res) => res.json())
      .then(setExtra)
      .catch(() => setExtra([]))
  }

  useEffect(() => {
    loadExtra()
  }, [])

  return (
    <div className="w-full max-w-5xl flex flex-col px-4" style={{ gap: '3rem' }}>
      {productions.map((prod, index) => (
        <motion.div
          key={prod.id}
          className="dark-card rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <div
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-stretch`}
          >
            {/* Image */}
            <div className="w-full md:w-2/5 flex items-stretch" style={{ padding: '1.25rem' }}>
              <div
                className="w-full rounded-xl overflow-hidden"
                style={{
                  border: '1.5px solid rgba(212,175,55,0.35)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.45)',
                  position: 'relative',
                  minHeight: '220px',
                }}
              >
                <SlotImage
                  slotKey={`production-${prod.id}` as any}
                  alt={prod.titleEn}
                  className="object-contain md:object-cover"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                />
              </div>
            </div>

            {/* Text content */}
            <div className="w-full md:w-3/5 flex flex-col" style={{ padding: '2.5rem' }}>
              <div className="flex flex-col" style={{ marginBottom: '1rem' }}>
                <span className="text-[#D4AF37] text-xs font-semibold tracking-widest">
                  {String(prod.id).padStart(2, '0')}
                </span>
                <h2 className="text-2xl font-bold golden-text-glow dramatic-heading tracking-wide" style={{ marginTop: '0.25rem' }}>
                  {prod.titleEn}
                  {prod.titleBn && (
                    <span className="text-gray-300 font-normal text-lg"> ({prod.titleBn})</span>
                  )}
                </h2>
                {prod.year && (
                  <span className="text-gray-400 text-sm italic" style={{ marginTop: '0.25rem' }}>
                    {prod.year}
                  </span>
                )}
              </div>

              <div className="flex flex-col" style={{ marginBottom: '1rem', gap: '0.15rem' }}>
                {prod.credits.map((line, i) => (
                  <span key={i} className="text-[#D4AF37]/80 text-sm">
                    {line}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-[1.9] whitespace-pre-line" style={{ marginBottom: '1rem' }}>
                <span className="text-[#D4AF37] font-semibold">Synopsis- </span>
                {prod.synopsis}
              </p>

              <p className="text-gray-400 text-xs leading-[1.8]">
                <span className="text-[#D4AF37]/80 font-semibold">Pioneer Actors: </span>
                {prod.actors}
              </p>
            </div>
          </div>
        </motion.div>
      ))}

      {extra.map((p, i) => (
        <ProductionCard
          key={p._id}
          production={p}
          index={productions.length + i}
          isAdmin={isAdmin}
          onChanged={loadExtra}
        />
      ))}

      {isAdmin && <AddProductionForm onAdded={loadExtra} />}
    </div>
  )
}

export default function Productions() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* ── BACKGROUND IMAGE (fixed, viewport-relative) ── */}
      <div
        className="page-bg-image"
        style={{ backgroundImage: "url('https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/landing-page.jpeg')" }}
      />
      <div className="page-bg-overlay" />

      {/* ── PAGE CONTENT ── */}
      <ImageManifestProvider>
        <div className="relative flex flex-col items-center" style={{ zIndex: 10, paddingTop: '40px', paddingBottom: '120px' }}>

          {/* ─── Page Header ─── */}
          <motion.div
            className="w-full flex flex-col items-center text-center px-4"
            style={{ marginBottom: '20px' }}
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-5xl lg:text-6xl font-bold golden-text-glow dramatic-heading text-center"
              style={{ letterSpacing: '3px', marginBottom: '1px' }}
            >
              PRODUCTIONS
            </h1>
            <div className="w-28 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" style={{ marginBottom: '20px' }} />
            <p className="text-[#D4AF37] text-lg font-light italic leading-loose max-w-2xl text-center">
              Two Decades of Stories Staged in Service of Society
            </p>
          </motion.div>

          {/* ─── Divider ─── */}
          <div className="w-full flex justify-center px-4" style={{ marginBottom: '30px' }}>
            <div className="w-full max-w-5xl velvet-divider" />
          </div>

          {/* ─── Productions List ─── */}
          <ProductionsInner />

        </div>
      </ImageManifestProvider>
    </main>
  )
}
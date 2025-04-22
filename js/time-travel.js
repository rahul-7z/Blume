document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const timePeriodSelect = document.getElementById('timePeriod');
    const timeMachineBtn = document.getElementById('timeMachineBtn');
    const timePortal = document.getElementById('timePortal');
    const eventYear = document.getElementById('eventYear');
    const eventDescription = document.getElementById('eventDescription');
    const eventCategory = document.getElementById('eventCategory');
    const eventImage = document.getElementById('eventImage');
    const travelAgainBtn = document.getElementById('travelAgainBtn');
    const travelTimeline = document.getElementById('travelTimeline');
    
    // Time travel history
    let travelHistory = [];
    
    // Historical events database by time period
   const historicalEvents = {
  ancient: [
    { 
      year: '3000 BCE', 
      event: 'First pyramids were built in Egypt. These massive stone structures were constructed as royal tombs for pharaohs during the Old Kingdom period. The step pyramid of Djoser at Saqqara, designed by the architect Imhotep, was the first monumental stone structure and represented a revolutionary advancement in architecture. These engineering marvels required immense manpower, sophisticated planning, and precise mathematical calculations, demonstrating the ancient Egyptians\' remarkable understanding of geometry and construction techniques. The pyramids served not only as tombs but also as symbols of the pharaoh\'s divine power and connection to the gods.', 
      category: 'Architecture',
      image: 'assets/images/time-travel/egyptian-pyramids.jpg'
    },
    { 
      year: '2700 BCE', 
      event: 'The first written recipe was recorded in Mesopotamia. Inscribed on clay tablets in cuneiform script, these ancient cooking instructions detailed the preparation of various dishes for the royal courts. The recipes often included ingredients like meats, grains, vegetables, and herbs combined with specific preparation techniques. Many of these early culinary documents were surprisingly sophisticated, including precise measurements and detailed cooking methods that demonstrate the advanced food culture of ancient Mesopotamian civilization. These tablets provide invaluable insight into the daily lives, agricultural practices, and cultural preferences of one of humanity\'s earliest civilizations.', 
      category: 'Cuisine',
      image: 'assets/images/time-travel/mesopotamian-recipe.jpg'
    },
    { 
      year: '1600 BCE', 
      event: 'The first evidence of mathematical algebra appeared in Egypt and Babylon. Both civilizations independently developed methods to solve linear and quadratic equations, using geometric approaches to tackle what we now recognize as algebraic problems. Egyptian mathematicians used a method called "the rule of false position" to solve linear equations in the Rhind Papyrus, while Babylonians developed techniques to solve quadratic equations through completing the square. These mathematical innovations arose primarily from practical needs related to land measurement, tax collection, calendar calculations, and engineering projects. Their work laid the foundation for mathematical thinking that would later be formalized by Greek, Islamic, and Renaissance mathematicians.', 
      category: 'Science',
      image: 'assets/images/time-travel/egyptian-math.jpg'
    },
    { 
      year: '776 BCE', 
      event: 'The first Olympic Games were held in Olympia, Greece. These ancient games were established as a religious festival to honor Zeus and featured only a single event initially—a 192-meter footrace called the stade. Over time, the Olympic Games expanded to include wrestling, boxing, chariot racing, the pentathlon, and other athletic contests, lasting for five days every four years. The games served not only as athletic competitions but also as important cultural and political gatherings that temporarily halted wars between Greek city-states under the sacred Olympic truce. Winners received olive wreaths and achieved tremendous fame and honor in their home cities, often receiving substantial benefits including tax exemptions, free meals, and privileged positions.', 
      category: 'Sports',
      image: 'assets/images/time-travel/ancient-olympics.jpg'
    },
    { 
      year: '550 BCE', 
      event: 'The Persian Empire was founded by Cyrus the Great. After uniting the Persian and Median kingdoms, Cyrus established what would become the largest empire the ancient world had yet seen, stretching from the Mediterranean Sea to the Indus River. The Persian Empire was notable for its innovative administrative system of satrapies (provinces), its extensive road network for communication and trade, and its relatively tolerant approach to governing diverse peoples. Cyrus famously liberated the Jews from Babylonian captivity and allowed them to return to Jerusalem and rebuild their temple, earning him mention as a divinely appointed ruler in the Hebrew Bible. His empire established a model of multicultural governance that influenced later empires, including those of Alexander the Great and Rome.', 
      category: 'Politics',
      image: 'assets/images/time-travel/cyrus-great.jpg'
    },
    { 
      year: '330 BCE', 
      event: 'Alexander the Great conquered Persia and created one of history\'s largest empires. In just over a decade, the Macedonian king defeated the powerful Persian Empire and extended his domain from Greece to northwestern India, encompassing around two million square miles of territory. His conquests facilitated unprecedented cultural exchange between East and West, spreading Greek language, art, and ideas throughout the ancient world in what became known as the Hellenistic period. Alexander founded numerous cities named Alexandria, the most famous being in Egypt, which became a major center of Greek learning and culture. Though his empire fragmented after his early death at age 32, Alexander\'s conquests permanently transformed the political and cultural landscape of the ancient world, blending Greek culture with Persian, Egyptian, and Indian influences.', 
      category: 'Warfare',
      image: 'assets/images/time-travel/alexander-great.jpg'
    },
    { 
      year: '45 BCE', 
      event: 'Julius Caesar implemented the Julian calendar. Working with the Alexandrian astronomer Sosigenes, Caesar replaced the chaotic Roman calendar with a solar-based system of 365 days plus one leap day every four years. This reform addressed the severe seasonal drift that had accumulated in the previous lunar calendar and established January 1 as the beginning of the civic year. The Julian calendar assigned the months lengths that are mostly familiar to us today and named the seventh month "July" after Caesar himself. Despite its impressive accuracy for its time, the Julian calendar still gained about one day every 128 years relative to the solar year, eventually leading to its replacement by the Gregorian calendar in 1582. Caesar\'s calendar reform represented one of history\'s most successful and long-lasting administrative changes, remaining the standard throughout Europe for over 1,600 years.', 
      category: 'Science',
      image: 'assets/images/time-travel/julian-calendar.jpg'
    },
    { 
      year: '79 CE', 
      event: 'Mount Vesuvius erupted, burying Pompeii and Herculaneum. This catastrophic volcanic eruption near Naples in Italy violently ejected a column of ash and pumice 21 miles into the atmosphere, followed by pyroclastic flows that engulfed the surrounding Roman towns. The eruption killed thousands of inhabitants who had not evacuated, many instantly suffocated by toxic gases before being covered by volcanic ash. The disaster was documented by Pliny the Younger in letters that provided the first detailed description of what is now called a "Plinian" eruption. Paradoxically, the volcanic material that destroyed these cities also preserved them remarkably well, creating a time capsule of Roman daily life that has provided archaeologists with unprecedented insight into the ancient world since systematic excavations began in the 18th century.', 
      category: 'Disaster',
      image: 'assets/images/time-travel/vesuvius-eruption.jpg'
    },
    { 
      year: '180 CE', 
      event: 'Marcus Aurelius, Roman Emperor and philosopher, died. As the last of the "Five Good Emperors," Marcus Aurelius ruled the Roman Empire at its territorial peak while embodying the ideal of the philosopher-king advocated by Plato. Despite spending much of his reign defending the empire\'s borders against Germanic tribes and dealing with the Antonine Plague, he found time to write his "Meditations," a series of personal notes on Stoic philosophy that has become one of the most significant works of ancient philosophy. His death marked a turning point in Roman history, as he was succeeded by his son Commodus, whose ineffective and increasingly tyrannical rule began the gradual decline of the Roman Empire. The contrast between Marcus Aurelius\'s wisdom and his son\'s incompetence raised enduring questions about the merits of hereditary succession versus the selection of capable leaders.', 
      category: 'Philosophy',
      image: 'assets/images/time-travel/marcus-aurelius.jpg'
    },
    { 
      year: '455 CE', 
      event: 'The Vandals sacked Rome. Led by their king Genseric, the Germanic Vandal tribe captured and plundered the former capital of the Western Roman Empire for two weeks, systematically looting the city\'s tremendous wealth but largely sparing its inhabitants from violence after Pope Leo I negotiated for clemency. This event came just 45 years after the first sack of Rome by the Visigoths in 410, which had already shattered the myth of Rome\'s invincibility. The Vandals\' attack demonstrated the Western Roman Empire\'s continued weakening and inability to defend even its symbolic heart. Their thorough but methodical plundering of valuables gave rise to the modern term "vandalism," though historians note that the Vandals were actually more disciplined in their sacking than many other conquering forces of the era.', 
      category: 'Warfare',
      image: 'assets/images/time-travel/vandals-rome.jpg'
    }
  ],
  medieval: [
    { 
      year: '527 CE', 
      event: 'Byzantine Emperor Justinian I came to power. During his 38-year reign, Justinian attempted to restore the Roman Empire to its former glory by reconquering much of the Western territories that had fallen to Germanic kingdoms. His most enduring achievement was the codification of Roman law in the Corpus Juris Civilis (Body of Civil Law), which preserved Roman legal principles and served as the foundation for many modern legal systems. Justinian also oversaw the construction of architectural masterpieces including the magnificent Hagia Sophia cathedral in Constantinople, which featured an unprecedented dome design that would influence architecture for centuries. His reign, often called the "Golden Age of Byzantium," was supported by his capable and influential wife Empress Theodora and marked the high point of the Eastern Roman Empire\'s power and cultural achievement.', 
      category: 'Politics',
      image: 'assets/images/time-travel/justinian.jpg'
    },
    { 
      year: '632 CE', 
      event: 'Muhammad, founder of Islam, died in Medina. His death at age 62 marked the end of the revelations that would form the Quran and launched a succession crisis that would eventually lead to the Sunni-Shia divide in Islam. During his lifetime, Muhammad had united the Arabian Peninsula under the banner of Islam, transformed Medina into the first Islamic state, and established the religious, social, and political principles that would guide the rapidly expanding Muslim community. Under his leadership, Islam had grown from a small movement to a major religious and political force that would soon challenge the Byzantine and Persian empires. His death triggered debates about leadership succession that continue to influence Islamic politics and theology to this day, while his teachings and example (Sunnah) remain central to the faith of over 1.8 billion Muslims worldwide.', 
      category: 'Religion',
      image: 'assets/images/time-travel/medina.jpg'
    },
    { 
      year: '793 CE', 
      event: 'Vikings began their raids on Europe with the attack on Lindisfarne. This surprise raid on a wealthy monastery off England\'s northeast coast shocked Christian Europe and initiated nearly three centuries of Norse expansion, exploration, and conquest. Viking longships, with their shallow drafts, allowed raiders to navigate rivers deep inland, attacking settlements previously considered safe from seaborne threats. The raid on Lindisfarne was notable not just for its violence but for targeting a religious site, which contemporary chroniclers saw as a sacrilegious act that heralded a new dark age. This initial raid was followed by increasingly ambitious Viking expeditions that established settlements, trading posts, and kingdoms throughout Europe, reached Constantinople and the Middle East, and even discovered North America five centuries before Columbus. The Viking Age fundamentally reshaped the political and cultural landscape of medieval Europe.', 
      category: 'Warfare',
      image: 'assets/images/time-travel/viking-raid.jpg'
    },
    { 
      year: '1066 CE', 
      event: 'William the Conqueror invaded England, winning the Battle of Hastings. After defeating the English forces and killing King Harold II, the Duke of Normandy became King of England, establishing a Norman dynasty that would profoundly transform English society, language, and governance. William implemented the feudal system more systematically in England, replaced most of the Anglo-Saxon aristocracy with Norman nobles, and commissioned the Domesday Book, an unprecedented survey of the entire country\'s land and resources. The Norman Conquest brought England more firmly into European politics and culture, replacing Old English with Norman French as the language of the elite and introducing continental architectural styles, legal concepts, and administrative practices. This conquest represents one of history\'s most successful and consequential invasions, as it permanently altered England\'s development and created a hybrid Anglo-Norman culture whose influence continues to be felt in modern English language and institutions.', 
      category: 'Warfare',
      image: 'assets/images/time-travel/battle-hastings.jpg'
    },
    { 
      year: '1206 CE', 
      event: 'Genghis Khan was proclaimed ruler of all Mongol tribes. After unifying the nomadic tribes of the Mongolian plateau through a combination of diplomatic alliances and military conquests, Temüjin was given the title "Genghis Khan" (Universal Ruler) in a kurultai assembly of Mongol chiefs. This unification transformed formerly disparate and often warring tribes into history\'s most formidable military force, capable of coordinated campaigns across vast distances. Genghis Khan implemented revolutionary military tactics, a meritocratic command structure, and sophisticated messaging systems that allowed the Mongols to defeat much larger armies and conquer sedentary civilizations with far greater populations. Under his leadership and that of his successors, the Mongols would create the largest contiguous land empire in history, connecting East Asia to Europe and facilitating unprecedented cultural exchange, trade, and technology transfer across Eurasia.', 
      category: 'Politics',
      image: 'assets/images/time-travel/genghis-khan.jpg'
    },
    { 
      year: '1271 CE', 
      event: 'Marco Polo began his journey to China. Setting out with his father and uncle from Venice, the 17-year-old Marco embarked on an epic 24-year journey that would take him across Asia to the court of Kublai Khan, the Mongol ruler of China. According to his later account, "The Travels of Marco Polo," he served as an emissary for the Great Khan for nearly two decades, traveling extensively throughout China and other Asian lands rarely visited by Europeans. After returning to Venice in 1295, his detailed descriptions of paper money, coal burning, postal systems, and the vast wealth of Asian civilizations initially met with skepticism but eventually became one of medieval Europe\'s most influential and widely read travelogues. Though modern scholars debate the accuracy of some of his claims, Polo\'s account stimulated European interest in the East, influenced cartography for centuries, and reportedly inspired Christopher Columbus\'s voyages seeking a western route to the lands Polo had described.', 
      category: 'Exploration',
      image: 'assets/images/time-travel/marco-polo.jpg'
    },
    { 
      year: '1347 CE', 
      event: 'The Black Death began spreading through Europe. Arriving via Genoese trading ships from the Crimea, this devastating bubonic plague pandemic killed an estimated 30-60% of Europe\'s population over the next five years. The unprecedented mortality rate created severe labor shortages that accelerated the collapse of the feudal system, as surviving peasants gained economic leverage to demand better conditions and wages. Religious explanations for the catastrophe proved inadequate, weakening the Church\'s authority and encouraging more secular or scientific approaches to understanding disease. The plague\'s psychological impact was profound, influencing art, literature, and religious practice, while spurring the development of public health measures such as quarantines. This biological catastrophe ultimately contributed to major social, economic, and cultural changes that helped end the medieval period and lay groundwork for the Renaissance.', 
      category: 'Disease',
      image: 'assets/images/time-travel/black-death.jpg'
    },
    { 
      year: '1415 CE', 
      event: 'The Battle of Agincourt during the Hundred Years\' War. In this stunning victory, King Henry V\'s exhausted and heavily outnumbered English force defeated a much larger French army through superior tactics, disciplined fighting, and the devastating effectiveness of the English longbow. The battle became one of England\'s greatest military achievements and was immortalized in Shakespeare\'s play "Henry V" with the famous St. Crispin\'s Day speech. At Agincourt, heavily armored French knights charged across muddy terrain into carefully prepared English positions, where they were decimated by longbow volleys that could penetrate armor at close range. This decisive English victory bolstered Henry V\'s military reputation, strengthened his claim to the French throne, and temporarily shifted the balance of power in the Hundred Years\' War, though England would ultimately lose its continental possessions.', 
      category: 'Warfare',
      image: 'assets/images/time-travel/agincourt.jpg'
    },
    { 
      year: '1440 CE', 
      event: 'Johannes Gutenberg invented the printing press. By combining several existing technologies—including paper, oil-based inks, and wine presses—with his innovation of movable metal type, the German goldsmith created a system that dramatically reduced the cost and time required to produce books. Before Gutenberg\'s invention, books were painstakingly copied by hand and were so expensive that only the wealthiest institutions and individuals could afford them. The printing press made possible the mass production of affordable books, rapidly accelerating the spread of ideas and literacy across Europe. This technological revolution democratized knowledge, undermined institutional control of information, standardized languages, fueled the Renaissance and Scientific Revolution, and later provided the communications infrastructure for the Protestant Reformation and the Enlightenment. The printing press is widely considered one of the most influential inventions in human history, fundamentally transforming how knowledge was created, preserved, and shared.', 
      category: 'Technology',
      image: 'assets/images/time-travel/gutenberg-press.jpg'
    },
    { 
      year: '1492 CE', 
      event: 'Christopher Columbus reached the Americas. Sailing west from Spain with three ships to find a new route to Asia, the Italian explorer instead made landfall in the Bahamas, initiating sustained contact between the Eastern and Western Hemispheres. This momentous encounter, later termed the "Columbian Exchange," transferred plants, animals, technologies, diseases, and people between continents that had developed in isolation for thousands of years. Columbus\'s voyages initiated Spanish colonization of the Americas and triggered enormous demographic changes as European diseases devastated indigenous populations while European settlers and enslaved Africans arrived in growing numbers. While Columbus died believing he had reached Asia, his voyages redrew the world map, shifted the balance of global power toward Atlantic Europe, and began the creation of new hybrid cultures throughout the Americas. This event is widely considered one of history\'s major turning points, marking the beginning of the modern era of globalization.', 
      category: 'Exploration',
      image: 'assets/images/time-travel/columbus.jpg'
    }
  ],
  modern: [
    { 
      year: '1517', 
      event: 'Martin Luther posted his Ninety-five Theses, starting the Protestant Reformation. Nailed to the door of All Saints\' Church in Wittenberg, Germany, Luther\'s academic propositions challenged the Catholic Church\'s practice of selling indulgences and questioned papal authority. What began as a scholarly critique quickly spread throughout Europe thanks to the recently invented printing press, which allowed Luther\'s ideas to reach a wide audience in a matter of weeks. The resulting theological revolution shattered the religious unity of Western Christianity, sparked decades of religious wars, and reshaped the political landscape of Europe as rulers aligned with either Catholic or Protestant factions. Beyond its religious implications, the Reformation promoted literacy as Protestants emphasized reading the Bible in vernacular languages, strengthened the power of secular rulers relative to church authorities, and influenced the development of modern concepts of individual conscience and religious freedom.', 
      category: 'Religion',
      image: 'assets/images/time-travel/luther-theses.jpg'
    },
    { 
      year: '1605', 
      event: 'Miguel de Cervantes published "Don Quixote". Often considered the first modern novel, this Spanish masterpiece satirized romantic chivalric literature through the adventures of an elderly gentleman who loses his sanity reading too many knight-errant tales and sets out to revive chivalry in a world that no longer values it. The novel\'s innovative narrative techniques, complex characterization, and exploration of themes like idealism versus reality established a template for Western fiction that continues to influence writers today. Through the tragicomic relationship between the deluded but noble Quixote and his pragmatic squire Sancho Panza, Cervantes created one of literature\'s most enduring character duos and explored profound questions about human nature, perception, and social values. "Don Quixote" was an immediate commercial success and has been translated into more languages than any book except the Bible, with phrases like "tilting at windmills" entering everyday language.', 
      category: 'Literature',
      image: 'assets/images/time-travel/don-quixote.jpg'
    },
    { 
      year: '1687', 
      event: 'Isaac Newton published "Principia Mathematica". This groundbreaking scientific work established the three laws of motion and the universal law of gravitation, explaining diverse phenomena from falling apples to planetary orbits with the same mathematical principles. Newton\'s work unified terrestrial and celestial mechanics, demonstrating that the same forces govern motion throughout the universe and providing mathematical tools to predict such motion with unprecedented accuracy. The Principia also introduced calculus as a mathematical tool, though Newton\'s notation differed from the version developed independently by Leibniz that is commonly used today. This publication marked the culmination of the Scientific Revolution, replacing Aristotelian physics and Ptolemaic astronomy with a coherent mechanical model of the universe that would dominate scientific thought until Einstein\'s theories in the early 20th century. Newton\'s achievement established mathematical physics as the premier scientific discipline and inspired generations of scientists to seek unified mathematical descriptions of natural phenomena.', 
      category: 'Science',
      image: 'assets/images/time-travel/newton-principia.jpg'
    },
    { 
      year: '1776', 
      event: 'The United States Declaration of Independence was adopted. Drafted primarily by Thomas Jefferson and approved by the Second Continental Congress, this document announced the thirteen American colonies\' separation from Great Britain and outlined a philosophical justification for revolution based on natural rights and popular sovereignty. The Declaration\'s eloquent assertion that "all men are created equal" and possess "unalienable Rights" to "Life, Liberty and the pursuit of Happiness" articulated Enlightenment principles that would inspire democratic movements worldwide. Though it did not immediately change the legal status of enslaved people or extend political rights to women, Native Americans, and non-property owners, the Declaration\'s universal language provided rhetorical ammunition for later civil rights movements seeking to extend its promises to all Americans. This founding document transformed a colonial tax revolt into a revolutionary struggle for self-government and established republican principles that would gradually reshape global political thought.', 
      category: 'Politics',
      image: 'assets/images/time-travel/declaration-independence.jpg'
    },
    { 
      year: '1789', 
      event: 'The French Revolution began with the storming of the Bastille. Parisian crowds attacked this royal fortress and prison on July 14, seeking ammunition for the people\'s militia and symbolically rejecting royal authority. The successful seizure of this symbol of monarchical power demonstrated the vulnerability of the old regime and accelerated revolutionary change throughout France. In the years that followed, France abolished feudalism, established a constitutional monarchy, executed King Louis XVI and Queen Marie Antoinette, and eventually became a republic that promoted the revolutionary ideals of "Liberty, Equality, Fraternity." The revolution\'s radical phase under Robespierre\'s Reign of Terror showed both the liberating and destructive potential of popular sovereignty, while its later military campaigns under Napoleon spread revolutionary principles throughout Europe. The French Revolution fundamentally challenged traditional concepts of monarchy, aristocracy, and church authority, inspiring both revolutionary movements and conservative reactions across Europe and the Americas.', 
      category: 'Politics',
      image: 'assets/images/time-travel/bastille.jpg'
    },
    { 
      year: '1804', 
      event: 'Napoleon Bonaparte crowned himself Emperor of France. In an unprecedented ceremony at Notre Dame Cathedral, Napoleon took the imperial crown from Pope Pius VII\'s hands and placed it on his own head, symbolizing that his power derived from his own achievements rather than from God or the Church. This coronation marked the transformation of the French Republic, born of revolution against monarchy, into an empire under the rule of a military genius who had risen from modest Corsican origins to become Europe\'s most powerful leader. As emperor, Napoleon consolidated many reforms of the French Revolution, including the comprehensive legal framework of the Napoleonic Code, while abandoning republican ideals in favor of hereditary rule and military expansion. His subsequent conquests spread revolutionary principles and modern administrative systems throughout Europe, permanently weakening feudal institutions even after his final defeat at Waterloo in 1815 and exile to the remote South Atlantic island of Saint Helena.', 
      category: 'Politics',
      image: 'assets/images/time-travel/napoleon-coronation.jpg'
    },
    { 
      year: '1819', 
      event: 'Mary Shelley published "Frankenstein". Subtitled "The Modern Prometheus," this pioneering science fiction novel tells the story of Victor Frankenstein, a scientist who creates artificial life only to reject his creation, with tragic consequences for both creator and creation. Written by Shelley when she was just 19 years old, the novel grew from a ghost story competition during a rainy summer vacation at Lake Geneva with her husband Percy Shelley and their friend Lord Byron. The book explores profound themes about scientific responsibility, the consequences of playing God, the nature of humanity, and society\'s treatment of outsiders. "Frankenstein" emerged during a period of rapid scientific advancement and expressed growing anxieties about technology\'s potential to disrupt traditional boundaries between life and death, natural and artificial. Its influence extends far beyond literature into film, popular culture, and scientific ethics debates, with "Frankenstein" becoming shorthand for technology that escapes human control.', 
      category: 'Literature',
      image: 'assets/images/time-travel/frankenstein.jpg'
    },
    { 
      year: '1859', 
      event: 'Charles Darwin published "On the Origin of Species". This landmark scientific work presented compelling evidence for evolution through natural selection, revolutionizing our understanding of life\'s diversity and humanity\'s place in nature. Based on observations gathered during Darwin\'s voyage on the HMS Beagle and decades of subsequent research, the book explained how species evolve over time as organisms with advantageous traits survive and reproduce more successfully than others. Darwin\'s theory provided a naturalistic explanation for life\'s diversity that did not require divine intervention in the development of species, challenging traditional religious accounts of creation. Though initially controversial, Darwin\'s ideas were quickly accepted by the scientific community and eventually became the unifying concept of the biological sciences, influencing fields from medicine to psychology. The theory\'s emphasis on competition and "survival of the fittest" (a phrase later added by Herbert Spencer) also had profound and sometimes problematic social applications in concepts like Social Darwinism.', 
      category: 'Science',
      image: 'assets/images/time-travel/darwin-origin.jpg'
    },
    { 
      year: '1876', 
      event: 'Alexander Graham Bell patented the telephone. After intense competition with inventor Elisha Gray, Bell secured the crucial patent for transmitting vocal sounds via electrical signals just hours before Gray filed a similar claim. Bell\'s successful public demonstrations of long-distance voice communication, including his famous first telephone call to assistant Thomas Watson ("Mr. Watson, come here, I want to see you"), convinced investors of the technology\'s potential and launched a communications revolution. Initially marketed to businesses as a replacement for the telegraph, the telephone gradually entered homes and transformed from a luxury to a necessity over the following decades. Unlike previous communication technologies that required specialized training to operate, telephones were intuitive to use, making them accessible to the general public and dramatically accelerating the speed and convenience of long-distance communication. Bell\'s invention laid the foundation for the global telecommunications networks that would eventually include mobile phones and internet telephony.', 
      category: 'Technology',
      image: 'assets/images/time-travel/bell-telephone.jpg'
    },
    { 
      year: '1896', 
      event: 'The first modern Olympic Games were held in Athens, Greece. Revived by French educator Baron Pierre de Coubertin after a 1500-year hiatus, these games sought to promote international goodwill through peaceful athletic competition in the spirit of the ancient Greek Olympics. The Athens Games featured 241 athletes (all men) from 14 nations competing in nine sports, including athletics, gymnastics, weightlifting, and swimming. Despite modest beginnings and limited international participation, the success of this initial modern Olympiad established a tradition that would grow into the world\'s preeminent sporting event, eventually featuring thousands of athletes from hundreds of countries. These first modern Games deliberately connected to ancient Greek heritage by including events like the marathon (commemorating the legendary run from Marathon to Athens) and by holding competitions at historic venues like the Panathenaic Stadium, which was restored for the occasion using ancient designs and white marble.', 
      category: 'Sports',
      image: 'assets/images/time-travel/modern-olympics.jpg'
    }
  ],
  recent: [
    { 
      year: '1903', 
      event: 'The Wright brothers made their first powered airplane flight. On December 17 at Kitty Hawk, North Carolina, Orville Wright piloted the Wright Flyer for a 12-second, 120-foot journey that demonstrated controlled, powered, heavier-than-air flight was possible. This historic achievement came after years of systematic experimentation with kites, gliders, and wind tunnels, during which the brothers solved crucial problems related to lift, control, and propulsion that had stymied earlier aviation pioneers. The Wright brothers\' innovative three-axis control system (roll, pitch, and yaw) remains fundamental to fixed-wing aircraft design to this day. Although their initial flight was brief, the brothers made four increasingly longer flights that day, with Wilbur\'s final attempt covering 852 feet in just under a minute. This breakthrough transformed transportation, warfare, commerce, and communication, effectively shrinking the world and enabling the global connectivity we take for granted today.', 
      category: 'Technology',
      image: 'assets/images/time-travel/wright-brothers.png'
    },
    { 
      year: '1912', 
      event: 'The Titanic sank on its maiden voyage. This "unsinkable" British passenger liner struck an iceberg in the North Atlantic on April 14 and sank in the early hours of April 15, resulting in over 1,500 deaths in one of maritime history\'s deadliest peacetime disasters. The tragedy revealed dangerous overconfidence in technology, as the ship carried too few lifeboats for its 2,224 passengers and crew, believing its advanced watertight compartment design made such precautions unnecessary. Class distinctions played a stark role in survival rates, with first-class passengers (especially women and children) far more likely to secure lifeboat seats than those in steerage. The sinking prompted major improvements in maritime regulations, including requirements for sufficient lifeboats for all passengers, 24-hour radio communications, and the establishment of the International Ice Patrol. The Titanic disaster has remained a powerful cultural touchstone, inspiring countless books, films, and exhibits that continue to fascinate the public over a century later.', 
      category: 'Disaster',
      image: 'assets/images/time-travel/titanic.jpeg'
    },
    { 
      year: '1928', 
      event: 'Alexander Fleming discovered penicillin. Returning from vacation to his notoriously messy laboratory at St. Mary\'s Hospital in London, the Scottish bacteriologist noticed that a mold (Penicillium notatum) contaminating one of his petri dishes had created a bacteria-free zone in the staphylococcus culture he was growing. This chance observation led Fleming to investigate the mold\'s antibacterial properties, although he struggled to isolate the active substance and initially underestimated its therapeutic potential. A decade later, Oxford scientists Howard Florey and Ernst Chain developed methods to purify penicillin in quantities sufficient for clinical use, enabling the first successful treatment of a patient in 1941. The mass production of penicillin during World War II saved countless soldiers from deadly infections and launched the antibiotic era, dramatically reducing mortality from previously lethal conditions like pneumonia, rheumatic fever, syphilis, and infected wounds. Fleming\'s discovery transformed medicine, earned him a Nobel Prize shared with Florey and Chain, and initiated the development of dozens of antibiotics that have extended millions of lives.', 
      category: 'Medicine',
      image: 'assets/images/time-travel/fleming-penicillin.webp'
    },
    { 
      year: '1939', 
      event: 'World War II began with Germany\'s invasion of Poland. On September 1, Nazi forces launched a blitzkrieg ("lightning war") attack with tanks and aircraft overwhelming Polish defenses, while German propaganda blamed Poland for provoking the conflict. Britain and France honored their defense commitments to Poland by declaring war on Germany two days later, initiating a global conflict that would eventually involve nations across six continents and cause an estimated 70-85 million deaths. This opening campaign demonstrated the effectiveness of Germany\'s modern combined-arms tactics and the vulnerability of traditional defensive strategies against mechanized warfare. The Soviet Union, operating under a secret protocol of the Molotov-Ribbentrop Pact with Germany, invaded Poland from the east on September 17, leading to the country\'s partition between the two totalitarian powers. Poland\'s swift defeat, despite guarantees from Western allies, marked the failure of post-World War I security arrangements and foreshadowed six years of unprecedented destruction that would fundamentally reshape global politics, economics, and society.', 
      category: 'Warfare',
      image: 'assets/images/time-travel/wwii-begins.jpg'
    },
      { 
      year: '1945', 
      event: 'The United Nations was established. Created in the aftermath of World War II to prevent future conflicts of similar magnitude, the UN formally came into existence when its charter was ratified by 51 founding member states. The organization\'s structure included the General Assembly, where all member nations have equal representation, and the Security Council, where five permanent members (the US, UK, France, Soviet Union/Russia, and China) hold veto power over substantive resolutions. Beyond its peacekeeping mission, the UN expanded to address international cooperation on economic development, human rights, humanitarian aid, and environmental protection through specialized agencies like UNESCO, WHO, and UNICEF. Despite limitations imposed by great power politics and sovereignty concerns, the UN has provided a crucial diplomatic forum, coordinated global health initiatives, monitored elections, delivered humanitarian assistance, and helped manage numerous regional conflicts. Its Universal Declaration of Human Rights, adopted in 1948, established human rights standards that have shaped constitutions, laws, and moral arguments worldwide.', 
      category: 'Politics',
      image: 'assets/images/time-travel/united-nations.jpg'
    },
    { 
      year: '1953', 
      event: 'James Watson and Francis Crick discovered the structure of DNA. Working at Cambridge University and building on X-ray crystallography data produced by Rosalind Franklin and Maurice Wilkins, the scientists identified the double-helix structure of deoxyribonucleic acid, the molecule that carries genetic instructions for all living organisms. Their breakthrough paper in the journal Nature, with its understated opening line "We wish to suggest a structure for the salt of deoxyribose nucleic acid (DNA)," revealed how the molecule\'s complementary base pairs provided a mechanism for self-replication and genetic inheritance. This discovery explained how genetic information could be stored, copied, and passed between generations, launching the field of molecular biology and transforming our understanding of life processes. Watson, Crick, and Wilkins received the Nobel Prize in Physiology or Medicine in 1962 (Franklin had died in 1958 and was therefore ineligible), and their work laid the foundation for subsequent developments in genetic engineering, genome sequencing, personalized medicine, and biotechnology.', 
      category: 'Science',
      image: 'assets/images/time-travel/dna-structure.jpg'
    },
    { 
      year: '1969', 
      event: 'Neil Armstrong became the first person to walk on the Moon. As commander of NASA\'s Apollo 11 mission, Armstrong descended from the lunar module Eagle and set foot on the lunar surface, delivering his famous statement: "That\'s one small step for [a] man, one giant leap for mankind." This historic moon landing represented the culmination of the Space Race between the United States and Soviet Union and fulfilled President Kennedy\'s 1961 goal of landing Americans on the Moon before the decade\'s end. The mission demonstrated unprecedented technological capabilities, requiring precise calculations, reliable communications across 240,000 miles, and new equipment designed to function in the vacuum of space. An estimated 600 million people—about one-fifth of the world\'s population at the time—watched the moonwalk on television, making it one of the most watched events in human history. Beyond its scientific achievements, the Apollo program generated thousands of technological innovations with earthly applications in fields from medicine to materials science, while providing humanity with a new perspective on our planet as a fragile blue sphere in the vastness of space.', 
      category: 'Space',
      image: 'assets/images/time-travel/moon-landing.jpg'
    },
    { 
      year: '1971', 
      event: 'The first email was sent by Ray Tomlinson. The computer engineer implemented the first system able to send messages between different computers on ARPANET, the precursor to the internet. Tomlinson chose the @ symbol to separate the user name from the host computer name, creating the now-universal email address format still used today. His first test message was likely something unmemorable like "QWERTYUIOP" or "testing 1-2-3," though Tomlinson himself couldn\'t recall the exact content. This innovation allowed electronic communication between people using different computers, fundamentally changing how information could be exchanged across networks. Email quickly became the killer application of the early internet, driving network adoption and establishing a communication paradigm that would transform both professional and personal correspondence. Tomlinson\'s seemingly simple innovation created the foundation for digital communications that would eventually evolve into modern messaging platforms, social media, and collaborative tools that connect billions of people worldwide.', 
      category: 'Technology',
      image: 'assets/images/time-travel/first-email.png'
    },
    { 
      year: '1989', 
      event: 'The Berlin Wall fell, signaling the end of the Cold War. After East German officials announced relaxed travel restrictions, thousands of citizens gathered at the wall where, facing no resistance from border guards, they began dismantling the barrier that had physically and ideologically divided Berlin since 1961. This peaceful revolution came after months of mass demonstrations throughout East Germany and political liberalization in other Eastern Bloc countries, particularly Hungary and Poland. The wall\'s fall marked the symbolic collapse of Communist rule in Eastern Europe and accelerated German reunification, which officially occurred less than a year later. As the most visible symbol of the Iron Curtain that had divided Europe into competing capitalist and communist spheres, the Berlin Wall\'s destruction represented the end of post-World War II division and the failure of Soviet-style communism. The scenes of jubilant Germans celebrating atop the wall became defining images of 20th-century liberation, representing the triumph of popular will over authoritarian control and the reunification of a people separated by geopolitical conflict.', 
      category: 'Politics',
      image: 'assets/images/time-travel/berlin-wall.webp'
    },
    { 
      year: '1990', 
      event: 'The World Wide Web was invented by Tim Berners-Lee. Working at CERN, the European particle physics laboratory, Berners-Lee developed the three fundamental technologies that still form the foundation of today\'s web: HTML (the formatting language for web pages), HTTP (the protocol for retrieving linked resources), and URLs (standardized addresses for web resources). Unlike earlier internet applications that were primarily used by technical experts, the Web was designed to be accessible to non-technical users through a graphical interface and hyperlinks that allowed intuitive navigation between documents. Berners-Lee\'s decision not to patent or charge for his invention ensured its rapid and widespread adoption, transforming the internet from a specialized tool used by academics and government agencies into a global information space accessible to billions. The Web\'s growth accelerated dramatically after the release of the Mosaic browser in 1993, setting the stage for the digital revolution that has reshaped nearly every aspect of commerce, communication, entertainment, and social interaction in the decades since.', 
      category: 'Technology',
      image: 'assets/images/time-travel/www-invention.jpg'
    }
  ],
  contemporary: [
    { 
      year: '2001', 
      event: 'Wikipedia was launched. Created by Jimmy Wales and Larry Sanger as a "free encyclopedia that anyone can edit," this collaborative online reference work began as a complementary project to Nupedia, an expert-written encyclopedia that was progressing slowly due to its rigorous review process. The wiki format, allowing users to create and edit pages without specialized technical knowledge, enabled rapid expansion through contributions from volunteers worldwide. Despite initial skepticism about its accuracy and reliability given its open editing model, Wikipedia quickly grew to become one of the internet\'s most visited websites and the largest encyclopedia ever created, with millions of articles in hundreds of languages. The project\'s success demonstrated the potential of large-scale collaboration and challenged traditional publishing models by replacing centralized editorial authority with distributed peer review. Beyond its immediate function as a reference source, Wikipedia pioneered governance models for digital commons, showed the viability of non-commercial approaches to content creation, and established new paradigms for knowledge sharing that have influenced numerous other collaborative projects.', 
      category: 'Technology',
      image: 'assets/images/time-travel/wikipedia.jpg'
    },
    { 
      year: '2003', 
      event: 'The Human Genome Project was completed. This international scientific research project successfully identified and mapped all of the genes of the human genome, determining the sequence of the approximately 3 billion base pairs that constitute human DNA. The 13-year effort, involving 20 institutions across six countries, finished two years ahead of schedule and under budget, thanks to rapid advances in sequencing technology and computing power. The project revealed that humans have far fewer genes than previously estimated (around 20,000-25,000 rather than the expected 100,000), while identifying the positions of millions of genetic variations that make individuals unique. This comprehensive genetic blueprint has transformed our understanding of human biology, evolution, and disease, opening new approaches to medical research, diagnosis, and treatment. The project\'s commitment to making its data freely available to researchers worldwide accelerated scientific discovery and established important precedents for open-source approaches to biomedical research. The genomic revolution it launched continues to advance fields from personalized medicine to forensics, agricultural science, and evolutionary biology.', 
      category: 'Science',
      image: 'assets/images/time-travel/human-genome.jpg'
    },
    { 
      year: '2007', 
      event: 'Apple introduced the first iPhone. Unveiled by Steve Jobs at Macworld with the promise of "a revolutionary product that changes everything," the iPhone combined a mobile phone, internet communicator, and iPod music player into a single touch-screen device with an intuitive user interface. Unlike earlier smartphones that used physical keyboards or styluses, the iPhone featured multi-touch interaction, allowing users to directly manipulate on-screen content with their fingers through intuitive gestures like pinching and swiping. Though initially criticized for its high price and lack of certain features, the iPhone\'s elegant design and functionality created a new paradigm for mobile computing that competitors quickly sought to emulate. The introduction of the App Store in 2008 transformed the iPhone from a well-designed communication device into a versatile platform for third-party applications, creating a new digital ecosystem and economy. The iPhone\'s success helped make smartphones ubiquitous globally, fundamentally changing how billions of people communicate, work, navigate, shop, and entertain themselves.', 
      category: 'Technology',
      image: 'assets/images/time-travel/iphone.webp'
    },
    { 
      year: '2008', 
      event: 'The Large Hadron Collider was completed. Built by the European Organization for Nuclear Research (CERN) near Geneva, Switzerland, this massive particle accelerator is the world\'s largest and most powerful, consisting of a 27-kilometer ring of superconducting magnets cooled to temperatures colder than outer space. The LHC enables scientists to collide subatomic particles at nearly the speed of light, recreating conditions similar to those just after the Big Bang and allowing observation of exotic particles that exist only at extreme energies. Its most celebrated achievement came in 2012 with the confirmation of the Higgs boson, the long-theorized particle that explains why fundamental particles have mass, validating the last major untested prediction of the Standard Model of particle physics. Beyond the Higgs discovery, the LHC has produced unprecedented volumes of data on subatomic interactions, advancing understanding of antimatter, quark-gluon plasma, and potential physics beyond the Standard Model. This international scientific endeavor, involving thousands of scientists and engineers from over 100 countries, represents one of humanity\'s most ambitious attempts to understand the fundamental nature of matter and energy.', 
      category: 'Science',
      image: 'assets/images/time-travel/large-hadron-collider.jpg'
    },
    { 
      year: '2010', 
      event: 'The first iPad was released. Apple\'s tablet computer defined a new category of devices positioned between smartphones and laptops, featuring a 9.7-inch touch screen and a simplified version of the iPhone\'s operating system. While tablet computers had existed previously, they had failed to gain mainstream adoption due to clunky interfaces and compromised functionality. The iPad\'s intuitive touch interface, lengthy battery life, and ecosystem of applications designed specifically for its larger screen created a compelling user experience that quickly attracted millions of customers. Initially dismissed by some critics as merely "a big iPhone," the iPad found unexpected applications in education, healthcare, aviation, restaurants, and retail, while becoming a preferred device for casual web browsing, video consumption, and reading. The iPad\'s success prompted competitors to develop their own tablets, creating a new market segment that influenced both computing and media consumption habits. The device particularly transformed how people interact with digital content, accelerating the transition from print to digital publications and creating new opportunities for interactive media.', 
      category: 'Technology',
      image: 'assets/images/time-travel/ipad.jpg'
    },
    { 
      year: '2012', 
      event: 'The Curiosity rover landed on Mars. NASA\'s car-sized robotic explorer touched down on the Martian surface after executing a complex descent sequence nicknamed "seven minutes of terror," which included the novel use of a sky crane to lower the rover gently onto the planet\'s surface. Representing the most sophisticated Mars mission to date, Curiosity carried instruments to analyze soil and rock samples, measure radiation levels, monitor weather conditions, and capture high-resolution photographs of the Martian landscape. The mission\'s primary scientific goal was to determine whether Mars could have supported microbial life, which it confirmed by finding evidence of ancient streambeds and a lakebed environment with the chemical ingredients necessary for life. Curiosity\'s findings proved that Mars once had conditions suitable for life, fundamentally changing our understanding of the red planet\'s history and potential habitability. The rover\'s continued operation years beyond its planned mission duration has provided an unprecedented record of Mars\'s environmental conditions and geology, while its engineering innovations paved the way for subsequent Mars missions, including the Perseverance rover and its Ingenuity helicopter.', 
      category: 'Space',
      image: 'assets/images/time-travel/curiosity-rover.jpg'
    },
    { 
      year: '2016', 
      event: 'Gravitational waves were directly detected for the first time. The Laser Interferometer Gravitational-Wave Observatory (LIGO) announced the detection of ripples in spacetime created by the collision of two black holes 1.3 billion light-years away, confirming a major prediction of Einstein\'s general theory of relativity made a century earlier. The detected waves were produced by the merger of black holes with masses about 29 and 36 times that of our sun, converting approximately three solar masses into gravitational wave energy in a fraction of a second. This momentous discovery required incredibly sensitive instruments capable of measuring distortions in spacetime smaller than the width of a proton, as well as advanced data analysis techniques to identify the gravitational wave signal within background noise. The detection opened a new field of gravitational wave astronomy, allowing scientists to observe cosmic events invisible to traditional telescopes and providing a new way to study black holes, neutron stars, and potentially the early universe. The achievement earned three key LIGO scientists the 2017 Nobel Prize in Physics and marked the beginning of multi-messenger astronomy combining gravitational wave and electromagnetic observations.', 
      category: 'Science',
      image: 'assets/images/time-travel/gravitational-waves.jpg'
    },
    { 
      year: '2019', 
      event: 'The first image of a black hole was published. The Event Horizon Telescope Collaboration released the first direct visual evidence of a supermassive black hole and its shadow, located at the center of the galaxy M87, approximately 55 million light-years from Earth. This landmark achievement required synchronizing eight radio telescopes across four continents to create a virtual Earth-sized telescope with unprecedented sensitivity and resolution. The resulting image showed a glowing ring of superheated gas surrounding the dark central region (the "shadow") where light cannot escape the black hole\'s gravitational pull, visually confirming theoretical predictions about how black holes bend light around them. The observed black hole has a mass equivalent to 6.5 billion suns and measures approximately 40 billion kilometers across. This scientific milestone represented the culmination of decades of theoretical work on black holes and advances in very-long-baseline interferometry techniques, while providing a dramatic visual confirmation of Einstein\'s general relativity under extreme gravitational conditions. The image quickly became iconic, transforming an abstract mathematical concept into something humanity could actually see, and demonstrating the power of international scientific collaboration.', 
      category: 'Science',
      image: 'assets/images/time-travel/black-hole-image.png'
    },
    { 
      year: '2020', 
      event: 'The COVID-19 pandemic caused global lockdowns. A novel coronavirus first identified in Wuhan, China in late 2019 spread rapidly around the world, leading to unprecedented containment measures as governments attempted to slow transmission and prevent healthcare systems from being overwhelmed. By March 2020, schools, businesses, and public spaces across the globe had closed, international travel had largely ceased, and billions of people were under stay-at-home orders in the largest global public health response in modern history. The pandemic accelerated the adoption of remote work, online education, telemedicine, and contactless services while exposing vulnerabilities in global supply chains, healthcare systems, and social safety nets. Scientific collaboration proceeded at extraordinary speed, with researchers identifying the virus, sequencing its genome, developing diagnostic tests, and creating effective vaccines in record time. Despite these achievements, the pandemic caused millions of deaths, triggered the worst global economic recession since the Great Depression, exacerbated existing social inequalities, and transformed daily life in ways that continue to reverberate through society.', 
      category: 'Disease',
      image: 'assets/images/time-travel/covid-pandemic.jpg'
    }
  ]
};
  
    // Fallback image if the specific image isn't found
    const fallbackImage = 'assets/images/time-travel/fallback-history.jpg';
  
    // Event handlers
    timeMachineBtn.addEventListener('click', travelThroughTime);
    travelAgainBtn.addEventListener('click', travelThroughTime);
  
    // Function to preload images for smoother experience
    function preloadImages() {
      // Create an array of all image paths
      let allImages = [];
      
      // Loop through all time periods and events to collect image paths
      Object.keys(historicalEvents).forEach(period => {
        historicalEvents[period].forEach(event => {
          allImages.push(event.image);
        });
      });
      
      // Add fallback image
      allImages.push(fallbackImage);
      
      // Preload each image
      allImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }
  
    // Function to travel through time
    function travelThroughTime() {
      // Add a loading animation
      timePortal.classList.remove('d-none');
      eventYear.textContent = 'Traveling...';
      eventDescription.textContent = 'The time machine is calculating temporal coordinates...';
      eventCategory.textContent = 'Loading';
      
      // Simulate time travel delay (for dramatic effect)
      setTimeout(() => {
        const selectedPeriod = timePeriodSelect.value;
        let event;
        
        // Select a random event from either the chosen period or any period
        if (selectedPeriod === 'all') {
          // Combine all time periods and pick a random event
          const allPeriods = ['ancient', 'medieval', 'modern', 'recent', 'contemporary'];
          const randomPeriod = allPeriods[Math.floor(Math.random() * allPeriods.length)];
          const periodEvents = historicalEvents[randomPeriod];
          event = periodEvents[Math.floor(Math.random() * periodEvents.length)];
        } else {
          // Pick from the selected time period
          const periodEvents = historicalEvents[selectedPeriod];
          event = periodEvents[Math.floor(Math.random() * periodEvents.length)];
        }
        
        // Update the time portal with event information
        eventYear.textContent = event.year;
        eventDescription.textContent = event.event;
        eventCategory.textContent = event.category;
        
        // Set image with error handling
        eventImage.onerror = function() {
          this.src = fallbackImage;
        };
        eventImage.src = event.image;
        
        // Apply reveal animation
        timePortal.classList.add('fade-in');
        
      }, 1000); // Delay for dramatic effect
      
      // Scroll to the time portal
      timePortal.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Add some ambient effects
    function addAmbientEffects() {
      // Add subtle background animation
      const main = document.querySelector('main');
      
      // Random star effect in the background
      for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.className = 'time-star';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        main.appendChild(star);
      }
    }
    
    // Add CSS for stars animation and image transitions
    function addExtraStyles() {
      const styleElement = document.createElement('style');
      styleElement.textContent = `
        .time-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background-color: #ffb347;
          border-radius: 50%;
          opacity: 0;
          z-index: -1;
          animation: twinkle 5s infinite;
        }
        
        @keyframes twinkle {
          0% { opacity: 0; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
          100% { opacity: 0; transform: scale(1); }
        }
        
        #timePortal {
          transition: all 0.5s ease-in-out;
        }
        
        #timePortal:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 12px 24px rgba(255, 179, 71, 0.2);
        }
        
        #eventYear {
          color: #ff6b6b;
          transition: all 0.3s ease;
        }
        
        #eventImage {
          transition: transform 0.5s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          border: 4px solid white;
        }
        
        #eventImage:hover {
          transform: scale(1.05);
        }
        
        #travelTimeline .list-group-item {
          transition: all 0.3s ease;
          border-left: 4px solid transparent;
        }
        
        #travelTimeline .list-group-item:hover {
          border-left: 4px solid #ffb347;
          background-color: #fff9f1;
        }
        
        .time-image {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
        }
        
        @keyframes shine {
          to {
            left: 100%;
          }
        }
      `;
      document.head.appendChild(styleElement);
    }
    
    // Initialize the page
    function init() {
      addExtraStyles();
      addAmbientEffects();
      preloadImages();
    }
    
    // Run initialization
    init();
  });

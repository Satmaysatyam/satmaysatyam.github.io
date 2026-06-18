const site = {
  pages: [
    { id: 'home', label: 'Home', url: 'index.html' },
    { id: 'research', label: 'Research', url: 'research.html' },
    { id: 'audio', label: 'Audio Bank', url: 'audio.html' },
    { id: 'photography', label: 'Photography', url: 'photography.html' },
    { id: 'art', label: 'Art', url: 'art.html' },
    { id: 'cv', label: 'CV', url: 'cv.html' },
    { id: 'contact', label: 'Contact', url: 'contact.html' },
    { id: 'giving', label: 'Giving Back', url: 'giving.html' }
  ],
  researchTabs: [
    {
      id: 'lemur',
      title: 'Lemur Collective Movement',
      date: 'Oct 2026 - Oct 2029',
      emoji: '🐒',
      intro: 'Multimodal Communication & Social Dynamics in the Coordination of Collective Movement of Ring-tailed Lemur' ,
      desc: 'To understand how individual decisions scale into coordinated group action, our research investigates the collective movement of ring-tailed lemurs (<i>Lemur catta</i>). While group travel offers vital survival benefits like reduced predation and shared resource knowledge, it requires complex, continuous negotiation over when, where, and whom to follow. By equipping entire lemur groups with multi-sensor collars that synchronously record GPS, inertial movement, proximity, and on-animal acoustics, we capture a real-time, comprehensive picture of their behavior. This data allows us to explore exactly how multimodal communication—combining acoustic and visual cues—interacts with existing social relationships to drive and coordinate collective movement.',
      points: [],
      images: [
        { src: 'Research/lemur_multimodal_diagram.jpg', caption: 'Diagram demonstrating the role of visual and acoustic cues in coordinating collective movement' }
      ],
      logos: [
        { name: 'Deutsches Primatenzentrum', abbr: 'DPZ', color: '#1a5c78', bg: '#f0f5f8', logoUrl: 'logos/dpz.png' },
        { name: 'Deutscher Akademischer Austauschdienst', abbr: 'DAAD', color: '#005b82', bg: '#f0f5f8', logoUrl: 'logos/daad.png' },
        { name: 'Georg-August-Universität Göttingen', abbr: 'GAUG', color: '#003152', bg: '#eef3f7', logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxqI26s3fy-ELqldG79ORxp01FOgzRe8A-80sl5f_oUn07Qa1WBpogMyL&s=10' }
      ]
    },
    {
      id: 'breeding',
      title: 'Amphibian Breeding Ecology',
      intro: 'Evolution and Ecology of Winter Breeding Frogs in Western Ghats',
      date: 'Aug 2024 - June 2026',
      emoji: '🐸',
      desc: 'In this project, I investigated the fascinating evolutionary and ecological dynamics of winter-breeding amphibians in the Western Ghats. This research took a comprehensive, multi-tiered approach to understand this rare reproductive strategy, focusing primarily on the Indian Golden-back Frog (<i>Hylarana indica</i>).<br><br>My work investigated this breeding ecology across five distinct dimensions:<br><ul style="margin: 10px 0 20px; padding-left: 20px; list-style-type: disc; display: grid; gap: 8px;"><li><b>Evolutionary Origins:</b> Traced the deep evolutionary roots of winter breeding using phylogenetic analysis to map how and why this strategy evolved across amphibian lineages.</li><li><b>Ecological Advantages:</b> Explored how this unique timing provides ecological benefits in the field, assessing habitat stability and targeted adaptation.</li><li><b>Bioacoustics & Competition:</b> Deployed Audiomoth recorders for long-term passive monitoring and shotgun microphones for species-level active acoustic sampling to assess if winter breeding reduces acoustic competition.</li><li><b>Acoustic Parasitism:</b> Investigated the trade-offs of acoustic communication by sampling eavesdropping mosquitoes, testing if the winter season shields frogs from acoustic predators.</li><li><b>Individual Fitness:</b> Conducted long-term individual monitoring using Visual Implant Elastomer (VIE) tags to measure how traits like body size influence competitiveness and reproductive success.</li></ul>',
      points: [],
      images: [
        { src: 'Research/Amphibian1.jpg', caption: 'Active Acoustic Sampling of Cricket Frogs' },
        { src: 'Research/Amphibian2.jpg', caption: 'Morphometric measurement of sampled frogs' },
        { src: 'Research/Amphibian3.jpg', caption: 'Observing amphibians in their natural habitat' },
        { src: 'Research/Amphibian4.jpeg', caption: 'Dense forest stream habitat for amphibian surveys' },
        { src: 'Research/Amphibian5.jpeg', caption: 'Searching for vocalizing amphibians in the undergrowth' },
        { src: 'Research/Amphibian6.jpeg', caption: 'Documenting amphibian microhabitats' },
        { src: 'Research/Amphibian7.jpeg', caption: 'Modified CDC mosquito traps for quantifying parasitic pressure on frogs' },
        { src: 'Research/Amphibian8.jpeg', caption: 'Recording acoustic data in natural amphibian habitats' }
      ],
      logos: [
        { name: 'Ashoka University', abbr: 'Ashoka', color: '#b91c21', bg: '#fdf2f2', logoUrl: 'logos/ashoka.png' },
        { name: 'Association for Tropical Biology & Conservation', abbr: 'ATBC', color: '#d9a441', bg: '#f6f2ea', logoUrl: 'logos/atbc.png' }
      ]
    },
    {
      id: 'flock',
      title: 'Mixed-Species Flock Ecology',
      date: 'Jan 2024 - May 2024',
      emoji: '🐦',
      intro: 'Symphony of Survival: Bioacoustics Approach to understanding Mixed Species Bird Flocks in the Eastern Himalayas',
      desc: 'For my Master’s research project, I set out to solve a captivating puzzle in behavioral ecology: how do the complex, mixed-species bird flocks of the Eastern Himalayas actually assemble? By merging bioacoustics with social network analysis, my colleagues and I discovered that the forest wakes up differently depending on where you look. In the shadowy lower understory, we uncovered a powerful relationship between a bird\'s voice and its social status: <b>calling frequency directly predicts network centrality</b>.<br><br>We found that highly vocal birds, like the Yellow-throated Fulvetta, act as essential "acoustic beacons." Because they call so frequently during the dawn chorus, they establish themselves as highly central "hubs" within the social network. Their constant vocalizations serve as a rallying cry, actively drawing other species together and driving the cohesion of the flock. However, when we analyzed the upper forest canopy, this acoustic dynamic completely vanished. Despite forming massive, diverse groups, canopy birds showed no synchronized morning vocalizations, and the crucial link between how often they called and their social centrality was entirely absent. Ultimately, this study reveals that the early morning isn\'t just a time for birdsong—it is a critical, strategic window where key species use the sheer frequency of their calls to architect stable, multi-species communities.',
      images: [
        { src: 'Research/MSF1.JPG', caption: 'Mixed-Species Flock Observations' },
        { src: 'Research/MSF2.JPG', caption: 'Conducting bioacoustic recordings in Eaglenest Wildlife Sanctuary' },
        { src: 'Research/MSF3.JPG', caption: 'Fieldwork in the Eastern Himalayas' },
        { src: 'Research/MSF4.JPG', caption: 'Mixed-Species Flock Observations' }
      ],
      logos: [
        { name: 'Pondicherry University', abbr: 'PU', color: '#0b5d43', bg: '#f6f2ea', logoUrl: 'logos/pu.png' },
        { name: 'Indian Institute of Science', abbr: 'IISc', color: '#143559', bg: '#eef3ed', logoUrl: 'logos/iisc.png' }
      ]
    },
    {
      id: 'intern',
      title: 'Research Internship & Field Assistantship',
      date: '2020 - 2022',
      emoji: '🔬',
      intro: 'Field Assistantships & Research Internships',
      desc: 'Professional research roles spanning marine biology, People’s Biodiversity Registers (PBR) documentation, spatial modeling, and elevational bird prey surveys across India.',
      points: [
        '<b>Field Assistant (Jan 2021 - Feb 2021)</b>: Worked with the Wildlife Institute of India (WII) on the CAMPA Dugong Conservation Project at Marine National Park, Gulf of Kutch, Gujarat. Conducted seagrass habitat mapping, awareness programs, and sorted seagrass-associated macrobenthic fauna.',
        '<b>Research Intern (Jan 2021)</b>: Documented Rural People’s Biodiversity Registers (PBR) in the Core region of the Achanakmar Tiger Reserve, Chhattisgarh, with the Forest Department and FRLHT.',
        '<b>Research Intern (March 2020 - Sept 2020)</b>: Prepared Rural and Urban PBR documentation for three districts in Haryana with the Forest Department and FRLHT.',
        '<b>Summer Intern (April 2022 - July 2022)</b>: Worked with Dr. Umesh Srinivasan (IISc) to estimate arthropod prey availability for insectivorous birds along an elevational gradient in Eaglenest Wildlife Sanctuary.',
        '<b>GIS Intern (May 2021)</b>: Completed training in GIS and Remote Sensing applications for biodiversity conservation at WALMI, Bhopal.'
      ],
      imageGroups: [
        {
          groupName: 'Wildlife Institute of India',
          images: [
            { src: 'Research/WII1.jpeg', caption: 'Sunset view over the estuary and mangrove habitats' },
            { src: 'Research/WII2.jpeg', caption: 'Surveying sandy shorelines adjacent to mangrove forests' },
            { src: 'Research/WII3.jpeg', caption: 'Mangrove pneumatophores exposed during low tide' },
            { src: 'Research/WII4.jpeg', caption: 'Collection and sorting of marine gastropod shells' },
            { src: 'Research/WII5.jpeg', caption: 'Coastal landscape during evening surveys' }
          ]
        },
        {
          groupName: 'Achanakmar Tiger Reserve',
          images: [
            { src: 'Research/Achanakmar1.jpeg', caption: 'Documenting biodiversity in Achanakmar Tiger Reserve' },
            { src: 'Research/Achanakmar2.jpeg', caption: 'Forest trails used for wildlife surveys' },
            { src: 'Research/Achanakmar3.jpeg', caption: 'Observing flora and fauna for the People\'s Biodiversity Register' },
            { src: 'Research/Achanakmar4.jpeg', caption: 'Habitat assessment in the core forest areas' },
            { src: 'Research/Achanakmar5.jpeg', caption: 'Interaction with local communities for traditional knowledge' },
            { src: 'Research/Achanakmar6.jpeg', caption: 'Field data collection in dense deciduous forests' }
          ]
        }
      ],
      logos: [
        { name: 'Wildlife Institute of India', abbr: 'WII', color: '#0b5d43', bg: '#f6f2ea', logoUrl: 'logos/wii.png' },
        { name: 'Indian Institute of Science', abbr: 'IISc', color: '#143559', bg: '#eef3ed', logoUrl: 'logos/iisc.png' },
        { name: 'Foundation for Revitalisation of Local Health Traditions', abbr: 'FRLHT', color: '#688c3a', bg: '#f4f8f6', logoUrl: 'logos/frlht.png' },
        { name: 'WALMI Bhopal', abbr: 'WALMI', color: '#174f7b', bg: '#f0f5fa', logoUrl: 'logos/walmi.png' }
      ]
    },
    {
      id: 'volunteer',
      title: 'Volunteership',
      date: '2020 - 2022',
      emoji: '🤝',
      intro: 'Wildlife Conservation Volunteerships',
      desc: 'Active participation in conservation-led field surveys, large-mammal occupancy camera-trapping, and wildlife census drives in collaboration with NGOs and State Forest Departments.',
      points: [
        '<b>Kanha Bird Survey (Feb 2022)</b>: Participated in the annual bird count at Kanha Tiger Reserve with the Wildlife and Nature Conservancy (WNC) Indore.',
        '<b>Camera Trapping & Occupancy Survey (July 2021 - Aug 2021)</b>: Worked with WWF-India in the Satpura-Pench Corridor, setting up camera trap grids and collecting occupancy data.',
        '<b>Occupancy Survey (June 2021 & Oct 2020)</b>: Volunteered with the Wildlife Research and Conservation Society (WRCS) Pune for Phase II of the tiger, co-predator, and prey occupancy surveys in the Satpura-Melghat Corridor.',
        '<b>Wildlife Tourism Volunteer (March 2021)</b>: Collected data for the Centre for Wildlife Sciences (CWS) project examining nature-viewing preferences of tourists in Kanha Tiger Reserve.',
        '<b>Vulture Census (March 2021)</b>: Assisted the Madhya Pradesh Forest Department in conducting the Vulture Census at Anuppur.'
      ],
      imageGroups: [
        {
          groupName: 'WWF-India',
          images: [
            { src: 'Research/WWf1.jpeg', caption: 'Setting up camera traps for tiger occupancy surveys' },
            { src: 'Research/WWf2.jpeg', caption: 'Checking camera trap data in central Indian landscapes' },
            { src: 'Research/WWf3.jpeg', caption: 'Tracking animal signs and pugmarks' },
            { src: 'Research/WWf4.jpeg', caption: 'Fieldwork in the Kanha-Pench corridor' }
          ]
        },
        {
          groupName: 'Wildlife Research & Conservation Society (WRCS)',
          images: [
            { src: 'Research/WRCS1.jpeg', caption: 'Monitoring forest plots for conservation research' },
            { src: 'Research/WRCS2.jpeg', caption: 'Data collection on habitat usage' },
            { src: 'Research/WRCS3.jpeg', caption: 'Field surveys in mixed forest patches' },
            { src: 'Research/WRCS4.jpeg', caption: 'Assessing human-wildlife interaction zones' },
            { src: 'Research/WRCS5.jpeg', caption: 'Documenting species presence via tracks and signs' },
            { src: 'Research/WRCS6.jpeg', caption: 'Landscape level ecological surveys' }
          ]
        },
        {
          groupName: 'Centre for Wildlife Studies (CWS)',
          images: [
            { src: 'Research/CWS1.jpg', caption: 'Nature viewing surveys with tourists' },
            { src: 'Research/CWS2.jpeg', caption: 'Briefing volunteers before field assignments' },
            { src: 'Research/CWS3.jpeg', caption: 'Conducting surveys in protected areas' },
            { src: 'Research/CWS4.jpeg', caption: 'Coordinating with forest department staff' }
          ]
        },
        {
          groupName: 'Vulture Census',
          images: [
            { src: 'Research/Vulture1.jpeg', caption: 'Monitoring vulture nesting sites' },
            { src: 'Research/Vulture2.jpeg', caption: 'Vantage point surveys during the Vulture Census' },
            { src: 'Research/Vulture3.jpeg', caption: 'Identifying vulture species in flight' },
            { src: 'Research/Vulture4.jpeg', caption: 'Collaborating with Forest Department staff for census' }
          ]
        }
      ],
      logos: [
        { name: 'Wildlife and Nature Conservancy', abbr: 'WNC', color: '#174f7b', bg: '#f0f5fa', logoUrl: 'logos/wnc.png' },
        { name: 'Wildlife Research & Conservation Society', abbr: 'WRCS', color: '#8d5d3b', bg: '#f6f2ea', logoUrl: 'logos/wrcs.png' },
        { name: 'Centre for Wildlife Studies', abbr: 'CWS', color: '#0b5d43', bg: '#f6f2ea', logoUrl: 'logos/cws.png' },
        { name: 'Madhya Pradesh Forest Department', abbr: 'MP-FD', color: '#163126', bg: '#f4f8f6', logoUrl: 'logos/mpfd.png' }
      ]
    }
  ],
  publications: [
    {
      id: 'bird_flocks',
      title: 'Vocal species are more central in Eastern Himalayan mixed-species bird flocks',
      authors: 'Satyam Gupta, Akshay Bharadwaj, Akshiti Bhat, Aiti Thapa, Aman Biswakarma, Bharat Tamang, Binod Munda, Biren Biswakarma, Dema Tamang, Dambar Pradhan, Mangal K. Rai, Rohit Rai, Shambhu Rai, Umesh Srinivasan',
      journal: 'Ornithology',
      volume: '115(2)',
      pages: 'ukag021',
      year: '2026',
      doi: '10.1093/ornithology/ukag021',
      url: 'https://doi.org/10.1093/ornithology/ukag021',
      note: 'Investigates how vocal activity during the dawn chorus acts as an acoustic beacon, influencing the social centrality and cohesion of mixed-species understory bird flocks.',
      speciesName: 'MSF network plots with nodes as species, edges as co-occurrence and node colours as Flocktypes',
      img: 'Photography/bird_network_plot.png',
      citations: {
        apa: 'Gupta, S., Bharadwaj, A., Bhat, A., Thapa, A., Biswakarma, A., Tamang, B., Munda, B., Biswakarma, B., Tamang, D., Pradhan, D., Rai, M. K., Rai, R., Rai, S., & Srinivasan, U. (2026). Vocal species are more central in Eastern Himalayan mixed-species bird flocks. Ornithology, 115(2), ukag021. https://doi.org/10.1093/ornithology/ukag021',
        mla: 'Gupta, Satyam, et al. "Vocal Species Are More Central in Eastern Himalayan Mixed-Species Bird Flocks." Ornithology, vol. 115, no. 2, 2026, ukag021, https://doi.org/10.1093/ornithology/ukag021.',
        chicago: 'Gupta, Satyam, Akshay Bharadwaj, Akshiti Bhat, Aiti Thapa, Aman Biswakarma, Bharat Tamang, Binod Munda, Biren Biswakarma, Dema Tamang, Dambar Pradhan, Mangal K. Rai, Rohit Rai, Shambhu Rai, and Umesh Srinivasan. "Vocal Species Are More Central in Eastern Himalayan Mixed-Species Bird Flocks." Ornithology 115, no. 2 (2026): ukag021. https://doi.org/10.1093/ornithology/ukag021.',
        bibtex: `@article{gupta2026vocal,\n  title={Vocal species are more central in Eastern Himalayan mixed-species bird flocks},\n  author={Gupta, Satyam and Bharadwaj, Akshay and Bhat, Akshiti and Thapa, Aiti and Biswakarma, Aman and Tamang, Bharat and Munda, Binod and Biswakarma, Biren and Tamang, Dema and Pradhan, Dambar and Rai, Mangal K and Rai, Rohit and Rai, Shambhu and Srinivasan, Umesh},\n  journal={Ornithology},\n  volume={115},\n  number={2},\n  pages={ukag021},\n  year={2026},\n  publisher={Oxford University Press},\n  doi={10.1093/ornithology/ukag021},\n  url={https://doi.org/10.1093/ornithology/ukag021}\n}`
      }
    },
    {
      id: 'sea_snake',
      title: 'From genes to ecosystems: A multidisciplinary approach to understanding and conservation challenges for the short-tailed sea snake Hydrophis curtus (Shaw, 1802) in India',
      authors: 'Prachi Hatkar, Satyam Gupta, Chinnasamy Ramesh',
      journal: 'Journal of Marine Studies',
      volume: '2(3)',
      pages: '21664',
      year: '2025',
      doi: '10.29103/joms.v2i3.21664',
      url: 'https://doi.org/10.29103/joms.v2i3.21664',
      note: 'A comprehensive study combining genetics, ecological niche modeling, and field surveys to identify threat zones and propose critical conservation management plans for the short-tailed sea snake along the Indian coast.',
      speciesName: 'Short-tailed Sea Snake (Hydrophis curtus)',
      img: 'Photography/Hydrophis_curtus_350251401.jpg',
      imgCredit: 'Svetlana Tsarakhova / iNaturalist (CC0)',
      citations: {
        apa: 'Hatkar, P., Gupta, S., & Ramesh, C. (2025). From genes to ecosystems: A multidisciplinary approach to understanding and conservation challenges for the short-tailed sea snake Hydrophis curtus (Shaw, 1802) in India. Journal of Marine Studies, 2(3), 21664. https://doi.org/10.29103/joms.v2i3.21664',
        mla: 'Hatkar, Prachi, Satyam Gupta, and Chinnasamy Ramesh. "From Genes to Ecosystems: A Multidisciplinary Approach to Understanding and Conservation Challenges for the Short-Tailed Sea Snake Hydrophis curtus (Shaw, 1802) in India." Journal of Marine Studies, vol. 2, no. 3, 2025, 21664, https://doi.org/10.29103/joms.v2i3.21664.',
        chicago: 'Hatkar, Prachi, Satyam Gupta, and Chinnasamy Ramesh. "From Genes to Ecosystems: A Multidisciplinary Approach to Understanding and Conservation Challenges for the Short-Tailed Sea Snake Hydrophis curtus (Shaw, 1802) in India." Journal of Marine Studies 2, no. 3 (2025): 21664. https://doi.org/10.29103/joms.v2i3.21664.',
        bibtex: `@article{hatkar2025genes,\n  title={From genes to ecosystems: A multidisciplinary approach to understanding and conservation challenges for the short-tailed sea snake Hydrophis curtus (Shaw, 1802) in India},\n  author={Hatkar, Prachi and Gupta, Satyam and Ramesh, Chinnasamy},\n  journal={Journal of Marine Studies},\n  volume={2},\n  number={3},\n  pages={21664},\n  year={2025},\n  doi={10.29103/joms.v2i3.21664},\n  url={https://doi.org/10.29103/joms.v2i3.21664}\n}`
      }
    }
  ],
  sounds: [
    {
      id: 'ccw',
      name: 'Chestnut-crowned Warbler',
      scientific: 'Phylloscopus castaniceps',
      habitat: 'Eastern Himalayas',
      voice: 'call',
      emoji: '🐦',
      src: 'Audio Bank/Chestnut-crowned Warbler.wav',
      img: 'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/389668901/1200',
      imgCredit: 'Macaulay Library',
      audioCredit: 'Satyam Gupta',
      group: 'Birds'
    },
    {
      id: 'gcw',
      name: 'Grey-cheeked Warbler',
      scientific: 'Phylloscopus poliogenys',
      habitat: 'Eastern Himalayas',
      voice: 'call',
      emoji: '🐦',
      src: 'Audio Bank/GCW.wav',
      img: 'Audio Bank/GCW.jpg',
      imgCredit: 'Wikimedia Commons',
      audioCredit: 'Satyam Gupta',
      group: 'Birds'
    },
    {
      id: 'ghcf',
      name: 'Grey-headed Canary-flycatcher',
      scientific: 'Culicicapa ceylonensis',
      habitat: 'Eastern Himalayas',
      voice: 'whistle',
      emoji: '🐦',
      src: 'Audio Bank/GHCF.wav',
      img: 'Audio Bank/GHCF.jpg',
      imgCredit: 'Wikimedia Commons',
      audioCredit: 'Satyam Gupta',
      group: 'Birds'
    },
    {
      id: 'rtm',
      name: 'Red-tailed Minla',
      scientific: 'Minla ignotincta',
      habitat: 'Eastern Himalayas',
      voice: 'call',
      emoji: '🐦',
      src: 'Audio Bank/RTM.wav',
      img: 'Audio Bank/RTM.jpg',
      imgCredit: 'Wikimedia Commons',
      audioCredit: 'Satyam Gupta',
      group: 'Birds'
    },
    {
      id: 'hylarana',
      name: 'Indian Golden-backed Frog',
      scientific: 'Hylarana indica',
      habitat: 'Western Ghats',
      voice: 'croak',
      emoji: '🐸',
      src: 'Audio Bank/H.indica_Ind_01 (mp3cut.net).wav',
      img: 'Audio Bank/Hylarana_indica.jpg',
      imgCredit: 'Shreeram MV / Wikimedia Commons',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'hydrophylax',
      name: 'Intermediate Golden-backed Frog',
      scientific: 'Hydrophylax intermedius',
      habitat: 'Western Ghats',
      voice: 'croak',
      emoji: '🐸',
      src: 'Audio Bank/H.intermedius_Ind_14 (mp3cut.net).wav',
      img: 'Audio Bank/H_intermedius.jpg',
      imgCredit: 'Wikimedia Commons',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'malabaricus_frog',
      name: 'Malabar Gliding Frog',
      scientific: 'Rhacophorus malabaricus',
      habitat: 'Western Ghats',
      voice: 'croak',
      emoji: '🐸',
      src: 'Audio Bank/R.malabaricus_Ind_11 (mp3cut.net).wav',
      img: 'Photography/MGF1.png',
      imgCredit: 'Satyam Gupta',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'curtipes',
      name: 'Bicolored Frog',
      scientific: 'Clinotarsus curtipes',
      habitat: 'Western Ghats',
      voice: 'croak',
      emoji: '🐸',
      src: 'Audio Bank/C.curtipes_Ind_01 (mp3cut.net).wav',
      img: 'Photography/BCF2.png',
      imgCredit: 'Satyam Gupta',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'cyanophlyctis',
      name: 'Indian Skittering Frog',
      scientific: 'Euphlyctis cyanophlyctis',
      habitat: 'Western Ghats / Wetlands',
      voice: 'croak',
      emoji: '🐸',
      src: 'Audio Bank/E.cyanophlyctis_Ind_08 (mp3cut.net).wav',
      img: 'Audio Bank/E_cyanophlyctis.jpg',
      imgCredit: 'iNaturalist',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'bahuvistara',
      name: 'Widespread Fungoid Frog',
      scientific: 'Hydrophylax bahuvistara',
      habitat: 'Western Ghats',
      voice: 'croak',
      emoji: '🐸',
      src: 'Audio Bank/H.bahuvistara_Ind_10 (mp3cut.net).wav',
      img: 'Audio Bank/H_bahuvistara.jpg',
      imgCredit: 'Wikimedia Commons',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'syhadrensis',
      name: 'Syhadri Pygmy Frog',
      scientific: 'Minervarya syhadrensis',
      habitat: 'Western Ghats / Grasslands',
      voice: 'chirp',
      emoji: '🐸',
      src: 'Audio Bank/M.syhadrensis_Ind_18 (mp3cut.net).wav',
      img: 'Audio Bank/M_syhadrensis.jpg',
      imgCredit: 'Wikimedia Commons',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'amboli',
      name: 'Amboli Bush Frog',
      scientific: 'Pseudophilautus amboli',
      habitat: 'Western Ghats',
      voice: 'croak',
      emoji: '🐸',
      src: 'Audio Bank/P.amboli_Ind_19 (mp3cut.net).wav',
      img: 'Photography/ABF1.png',
      imgCredit: 'Satyam Gupta',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'maculatus',
      name: 'Indian Tree Frog',
      scientific: 'Polypedates maculatus',
      habitat: 'Western Ghats',
      voice: 'croak',
      emoji: '🐸',
      src: 'Audio Bank/P.maculatus_Ind_19 (mp3cut.net).wav',
      img: 'Audio Bank/P_maculatus.jpg',
      imgCredit: 'Wikimedia Commons',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'tuberculosus',
      name: 'Malabar Tree Toad',
      scientific: 'Pedostibes tuberculosus',
      habitat: 'Western Ghats / Canopy',
      voice: 'croak',
      emoji: '🐸',
      src: 'Audio Bank/P.tuberculosus_Ind_15 (mp3cut.net).wav',
      img: 'Photography/MTT1.png',
      imgCredit: 'Satyam Gupta',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'luteolus',
      name: 'Coorg Yellow Bush Frog',
      scientific: 'Raorchestes luteolus',
      habitat: 'Western Ghats',
      voice: 'whistle',
      emoji: '🐸',
      src: 'Audio Bank/R.luteolus_Ind_14 (mp3cut.net).wav',
      img: 'Photography/BEYB1.png',
      imgCredit: 'Satyam Gupta',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'kempholeyensis',
      name: 'Kempholey Night Frog',
      scientific: 'Nyctibatrachus kempholeyensis',
      habitat: 'Western Ghats',
      voice: 'croak',
      emoji: '🐸',
      src: 'Audio Bank/N.kempholeyensis_09 (mp3cut.net).wav',
      img: 'Audio Bank/N_kempholeyensis.jpg',
      bgPosition: '15% center',
      imgCredit: 'Wikimedia Commons',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'soundscape',
      name: 'Canopy Mixed-Species Flock (MSF)',
      scientific: 'Dawn Chorus / Bioacoustics',
      habitat: 'Eaglenest Wildlife Sanctuary',
      voice: 'dawn chorus',
      emoji: '🐦',
      src: 'Audio Bank/Soundscape.wav',
      img: 'Audio Bank/Soundscape.jpg',
      imgCredit: 'Satyam Gupta',
      audioCredit: 'Satyam Gupta',
      group: 'Birds'
    }
  ],
  photos: [
    // --- Amphibians ---
    {
      id: 'mgf',
      title: 'Malabar Gliding Frog',
      scientific: 'Rhacophorus malabaricus',
      group: 'Amphibians',
      srcs: ['Photography/MGF1.png', 'Photography/MGF2.png'],
      captions: [
        'Can glide up to 12 meters between canopy trees using the extensive webbing between its toes.'
      ],
      emoji: '🐸'
    },
    {
      id: 'mtt',
      title: 'Malabar Tree Toad',
      scientific: 'Pedostibes tuberculosus',
      group: 'Amphibians',
      srcs: ['Photography/MTT1.png', 'Photography/MTT2.png'],
      captions: [
        'Unlike most toads that live on the ground, this species spends almost its entire life high in the forest canopy.'
      ],
      emoji: '🐸'
    },
    {
      id: 'abf',
      title: 'Amboli Bush Frog',
      scientific: 'Pseudophilautus amboli',
      group: 'Amphibians',
      srcs: ['Photography/ABF1.png', 'Photography/ABF2.png'],
      captions: [
        'Bypasses the tadpole stage entirely, hatching from its egg as a fully formed miniature froglet.'
      ],
      emoji: '🐸'
    },
    {
      id: 'beyb',
      title: 'Blue-eyed Yellow Bush Frog',
      scientific: 'Raorchestes luteolus',
      group: 'Amphibians',
      srcs: ['Photography/BEYB1.png', 'Photography/BEYB2.png'],
      captions: [
        'Male frogs produce a distinct "tink-tink" metallic call to attract females during the heavy monsoon rains.'
      ],
      emoji: '🐸'
    },
    {
      id: 'indian_tree_frog',
      title: 'Indian Tree Frog',
      scientific: 'Polypedates maculatus',
      group: 'Amphibians',
      srcs: ['Photography/WTF1.png', 'Photography/WTF2.png'],
      captions: [
        'Can rapidly change its skin coloration from bright yellow to dark brown to match its surroundings.'
      ],
      emoji: '🐸'
    },
    {
      id: 'bcf',
      title: 'Bicolored Frog',
      scientific: 'Clinotarsus curtipes',
      group: 'Amphibians',
      srcs: ['Photography/BCF2.png'],
      captions: [
        'Their tadpoles are exceptionally large—often growing much larger than the adult frogs themselves before metamorphosis.'
      ],
      emoji: '🐸'
    },
    {
      id: 'idf',
      title: 'Indian Dot Frog',
      scientific: 'Uperodon mormorata',
      group: 'Amphibians',
      srcs: ['Photography/IDF1.png', 'Photography/IDF2.png'],
      captions: [
        'Features a tiny mouth specialized almost exclusively for an insect diet of ants and termites.'
      ],
      emoji: '🐸'
    },

    // --- Reptiles ---
    {
      id: 'mpv',
      title: 'Malabar Pit Viper',
      scientific: 'Craspedocephalus malabaricus',
      group: 'Reptiles',
      srcs: [
        'Photography/MPV1.png',
        'Photography/Malabar_Pit_Viper.png',
        'Photography/Malabar_Pit_Viper2.png',
        'Photography/MPV2.png',
        'Photography/MPV4.png'
      ],
      captions: [
        'Features heat-sensing pits between its eyes and nostrils to strike warm-blooded prey in complete darkness.'
      ],
      emoji: '🐍'
    },
    {
      id: 'indian_tent_turtle',
      title: 'Indian Tent Turtle',
      scientific: 'Pangshura tentoria',
      group: 'Reptiles',
      srcs: ['Photography/_DSC0792.JPG'],
      captions: [
        'Identified by the distinct, tent-like elevated spikes running vertically down the center of its shell.'
      ],
      emoji: '🐢'
    },
    {
      id: 'collared_cat_snake',
      title: 'Collared Cat Snake',
      scientific: 'Boiga nuchalis',
      group: 'Reptiles',
      srcs: [
        'Photography/Collared_Cat_Snake.png',
        'Photography/Collared_Cat_Snake2.png'
      ],
      captions: [
        'Uses its mildly venomous grooved rear fangs to paralyze sleeping lizards and small birds in the canopy.'
      ],
      emoji: '🐍'
    },
    {
      id: 'monitor_lizard',
      title: 'Bengal Monitor Lizard',
      scientific: 'Varanus bengalensis',
      group: 'Reptiles',
      srcs: ['Photography/Monitor_lizard (1 of 1).jpg'],
      captions: [
        'Possesses a highly forked tongue like a snake, which it uses to "taste" the air and track prey over long distances.'
      ],
      emoji: '🦎'
    },

    // --- Birds ---
    {
      id: 'white_throated_kingfisher',
      title: 'White-throated Kingfisher',
      scientific: 'Halcyon smyrnensis',
      group: 'Birds',
      srcs: ['Photography/DSC_0064.JPG'],
      captions: [
        'Unlike many kingfishers, it frequently hunts far from water, feeding primarily on large insects, lizards, and rodents.'
      ],
      emoji: '🪶'
    },
    {
      id: 'indian_paradise_flycatcher',
      title: 'Indian Paradise Flycatcher',
      scientific: 'Terpsiphone paradisi',
      group: 'Birds',
      srcs: ['Photography/DSC_0755.JPG'],
      captions: [
        'Adult males grow spectacular tail ribbons up to 12 inches long, which flutter gracefully as they chase insects in mid-air.'
      ],
      emoji: '🪶'
    },
    {
      id: 'jungle_owlet',
      title: 'Jungle Owlet',
      scientific: 'Glaucidium radiatum',
      group: 'Birds',
      srcs: ['Photography/DSC_0420.JPG'],
      captions: [
        'Unlike most owls, this species is frequently active during the day and often hunts small birds and lizards in bright sunlight.'
      ],
      emoji: '🪶'
    },
    {
      id: 'tragopan',
      title: 'Blyth\'s Tragopan',
      scientific: 'Tragopan blythii',
      group: 'Birds',
      srcs: ['Photography/Tragopan2-0857.png'],
      objectPosition: 'top',
      captions: [
        'During courtship, males inflate brightly colored, fleshy "horns" and a vibrant bib-like lappet to impress females.'
      ],
      emoji: '🪶'
    },
    {
      id: 'woodpecker_rufous',
      title: 'Rufous Woodpecker',
      scientific: 'Micropternus brachyurus',
      group: 'Birds',
      srcs: ['Photography/Woodpecker_rufous1-0647.png'],
      captions: [
        'Lays its eggs directly inside the active, stinging nests of acrobat ants, which surprisingly do not attack the incubating bird.'
      ],
      emoji: '🪶'
    },
    {
      id: 'nepal_lt',
      title: 'Nepal Laughingthrush',
      scientific: 'Trochalopteron lineatum',
      group: 'Birds',
      srcs: ['Photography/Nepal_LT-0009.png'],
      captions: [
        'Highly social birds that form tight-knit flocks, constantly communicating with a diverse vocabulary of squeaks, chatters, and trills.'
      ],
      emoji: '🪶'
    },
    {
      id: 'great_hornbill',
      title: 'Great Hornbill',
      scientific: 'Buceros bicornis',
      group: 'Birds',
      srcs: ['Photography/_DSC0774.JPG'],
      captions: [
        'Females seal themselves entirely inside a tree cavity with mud for months during nesting, relying completely on the male for food.'
      ],
      emoji: '🪶'
    },

    // --- Mammals ---
    {
      id: 'elephant',
      title: 'Asian Elephant',
      scientific: 'Elephas maximus',
      group: 'Mammals',
      srcs: ['Photography/Elephant1-0927.jpg'],
      captions: [
        'Can consume up to 150 kilograms of vegetation daily and uses its trunk to pick up objects as tiny as a single grain of rice.'
      ],
      emoji: '🐘'
    },
    {
      id: 'leopard',
      title: 'Indian Leopard',
      scientific: 'Panthera pardus fusca',
      group: 'Mammals',
      srcs: ['Photography/Leopard1-0435.jpg'],
      captions: [
        'Possesses immense upper body strength, allowing it to drag prey heavier than its own body weight high into tree branches.'
      ],
      emoji: '🐆'
    },
    {
      id: 'serow',
      title: 'Himalayan Serow',
      scientific: 'Capricornis sumatraensis thar',
      group: 'Mammals',
      srcs: ['Photography/Serow1-0074.png'],
      captions: [
        'An unusual mammal that looks like a cross between a goat, a donkey, and an antelope, perfectly adapted for steep, rocky slopes.'
      ],
      emoji: '🐐'
    },
    {
      id: 'buffalo',
      title: 'Wild Water Buffalo',
      scientific: 'Bubalus arnee',
      group: 'Mammals',
      srcs: ['Photography/buffalo1-0017.png', 'Photography/buffalo3-0419.png'],
      captions: [
        'Boasts the widest horn span of any living bovid, with massive crescent-shaped horns that can stretch over two meters across.'
      ],
      emoji: '🐃'
    },
    {
      id: 'spotted_deer',
      title: 'Spotted Deer',
      scientific: 'Axis axis',
      group: 'Mammals',
      srcs: ['Photography/spotted_deer1-1006.png', 'Photography/spotted_deer2-0140.png'],
      captions: [
        'Often forms a mutualistic relationship with langur monkeys, eating the fruits they drop and relying on their alarm calls for predator warnings.'
      ],
      emoji: '🦌'
    },
    {
      id: 'hog_deer',
      title: 'Hog Deer',
      scientific: 'Axis porcinus',
      group: 'Mammals',
      srcs: ['Photography/_DSC0310.JPG'],
      captions: [
        'Gets its name from its unusual habit of running through tall grass with its head hung low like a pig, rather than leaping.'
      ],
      emoji: '🦌'
    },
    {
      id: 'black_giant_squirrel',
      title: 'Black Giant Squirrel',
      scientific: 'Ratufa bicolor',
      group: 'Mammals',
      srcs: ['Photography/_DSC0479.JPG'],
      captions: [
        'One of the largest squirrel species in the world, capable of leaping incredible distances of up to 6 meters between canopy branches.'
      ],
      emoji: '🐿️'
    },
    {
      id: 'indian_muntjac',
      title: 'Indian Muntjac / Barking Deer',
      scientific: 'Muntiacus muntjak',
      group: 'Mammals',
      srcs: ['Photography/_DSC0525.JPG'],
      captions: [
        'Produces a loud, dog-like bark when alarmed by predators, giving it the nickname "barking deer".'
      ],
      emoji: '🦌'
    },


    // --- Invertebrates ---
    {
      id: 'amboli_purple_crab',
      title: 'Amboli Purple Forest Crab',
      scientific: 'Ghatiana atropurpurea',
      group: 'Invertebrates',
      srcs: ['Photography/_DSC0328.png'],
      captions: [
        'A fully terrestrial crab that never returns to water to breed, instead relying entirely on the high humidity of the monsoon forest.'
      ],
      emoji: '🦀'
    }
  ],
  art: [
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.34.22 PM (1)-fotor-20260607114633.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.34.22 PM-fotor-20260607114811.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.44 PM-fotor-20260607114913.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.45 PM (1)-fotor-20260607115034.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.45 PM (2)-fotor-20260607115122.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.45 PM-fotor-2026060711528.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.46 PM (1)-fotor-20260607115254.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.46 PM (2)-fotor-20260607115344.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.46 PM-fotor-2026060711556.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.47 PM (1)-fotor-20260607115623.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.47 PM (2)-fotor-20260607115728.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.47 PM (3)-fotor-20260607115835.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.47 PM-fotor-20260607115940.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.48 PM (1)-fotor-2026060712043.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.48 PM (2)-fotor-2026060712140.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.48 PM-fotor-2026060712230.png' }
  ],
  grants: [
    {
      title: 'DAAD Doctoral Scholarship',
      agency: 'Deutscher Akademischer Austauschdienst (DAAD)',
      amount: '€1,400 / month',
      year: '2026-29',
      note: 'Highly prestigious research grant awarded for pursuing doctoral research in Germany, supporting international academic exchange and scientific cooperation.',
      logo: 'logos/daad.png'
    },
    {
      title: 'ASAB Conference Attendance Grant',
      agency: 'Association for the Study of Animal Behaviour',
      amount: '£500',
      year: '2025',
      note: 'Travel grant awarded for attending the ASAB Winter Conference in Edinburgh, Scotland.',
      logo: 'logos/asab.png'
    },
    {
      title: 'IEC Conference Attendance Grant',
      agency: 'Koita Centre for Digital Health, Ashoka University',
      amount: '₹35,000',
      year: '2025',
      note: 'Travel grant awarded for attending the International Ethological Congress in Kolkata, India.',
      logo: 'logos/ashoka.png'
    },
    {
      title: 'ATBC Seed Research Grant',
      agency: 'Association for Tropical Biology and Conservation',
      amount: '$1,000',
      year: '2025',
      note: 'Awarded for the ongoing Amphibian Ecology project in the Western Ghats.',
      logo: 'logos/atbc_funding.jpg'
    },
    {
      title: 'DST INSPIRE Scholarship',
      agency: 'Department of Science and Technology',
      amount: '₹4,00,000',
      year: '2019 - 2024',
      note: 'Five-year national scholarship awarded for pursuing basic sciences.',
      logo: 'logos/dst.png'
    }
  ]
};

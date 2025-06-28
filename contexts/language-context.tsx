"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "so"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translations object
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.workshops": "Workshops",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",

    // Hero Section
    "hero.badge": "🚀 Leading Cybersecurity Training Provider",
    "hero.title": "AlphaSploit",
    "hero.subtitle": "Cybersecurity Training Excellence",
    "hero.description":
      "Building on our proven track record of conducting cybersecurity workshops and creating educational YouTube content, we continue to provide expert cybersecurity training through our workshops and educational resources. Join thousands who already follow our workshops and YouTube channel.",
    "hero.getEarlyAccess": "Get Early Access",
    "hero.joinWaitlist": "Join Waitlist",
    "hero.workshopsConducted": "Workshops Conducted",
    "hero.coursesInDevelopment": "Courses in Development",
    "hero.youtubeSubscribers": "YouTube Subscribers",
    "hero.globalCommunity": "Global Community",

    // About Section
    "about.badge": "About AlphaSploit",
    "about.title": "Building Tomorrow's",
    "about.titleHighlight": " Cyber Defenders",
    "about.description1":
      "AlphaSploit has been actively conducting cybersecurity workshops and creating educational content on YouTube, building a community of learners passionate about cybersecurity. Founded by industry veterans with decades of combined experience, we're now expanding our proven workshop model into a comprehensive online training platform.",
    "about.description2":
      "Our hands-on workshop approach and engaging YouTube tutorials have already helped hundreds of professionals enhance their cybersecurity skills. Now we're scaling this proven methodology into structured certification programs that will be available online, making our expert training accessible to a global audience.",
    "about.learnMore": "Learn More About Us",

    // Services
    "services.badge": "Our Services",
    "services.title": "Comprehensive Training Programs",
    "services.description":
      "From foundational concepts to advanced techniques, our programs are designed to elevate your cybersecurity expertise and accelerate your career growth.",
    "services.contactForTraining": "Contact for Training",
    "services.mostPopular": "🔥 MOST POPULAR",
    "services.additionalSpecializations": "Additional Specializations",

    // Service Items
    "service.ethicalHacking.title": "Ethical Hacking",
    "service.ethicalHacking.description":
      "Master penetration testing, vulnerability assessment, and responsible disclosure practices with hands-on labs.",
    "service.socAnalyst.title": "SOC Analyst Training",
    "service.socAnalyst.description":
      "Become a skilled Security Operations Center analyst with intensive threat detection and incident response training.",
    "service.redTeaming.title": "Red Teaming",
    "service.redTeaming.description":
      "Advanced adversary simulation covering sophisticated attack techniques and evasion strategies.",
    "service.workshops.title": "Cybersecurity Workshops",
    "service.workshops.description":
      "Specialized workshops on emerging threats, new technologies, and advanced security concepts.",

    // Testimonials
    "testimonials.badge": "Testimonials",
    "testimonials.title": "Success Stories from Our Alumni",
    "testimonials.description":
      "Hear from cybersecurity professionals who have transformed their careers through our training programs.",

    // Newsletter
    "newsletter.badge": "📧 Stay Updated",
    "newsletter.title": "Stay Updated with Our Latest",
    "newsletter.titleHighlight": " Content",
    "newsletter.description":
      "Join our community to receive the latest cybersecurity insights, workshop announcements, and educational content. Get notified about upcoming workshops and exclusive training opportunities.",
    "newsletter.placeholder": "Enter your email address",
    "newsletter.subscribe": "Subscribe Now",
    "newsletter.threatIntel": "Threat Intelligence",
    "newsletter.threatIntelDesc": "Latest cybersecurity threats and vulnerabilities",
    "newsletter.trainingTips": "Training Tips",
    "newsletter.trainingTipsDesc": "Expert advice and learning resources",
    "newsletter.exclusiveOffers": "Exclusive Offers",
    "newsletter.exclusiveOffersDesc": "Early access and special discounts",

    // Contact
    "contact.title": "Contact Us",
    "contact.description":
      "Ready to advance your cybersecurity career? Get in touch with our team to discuss training options and find the perfect program for you.",
    "contact.sendMessage": "Send us a Message",
    "contact.formDescription": "Fill out the form below and we'll get back to you within 24 hours.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.getInTouch": "Get in Touch",
    "contact.multipleWays": "Multiple ways to reach our team for support and inquiries.",
    "contact.phone": "Phone",
    "contact.whatsapp": "WhatsApp",
    "contact.address": "Address",
    "contact.businessHours": "Business Hours",

    // About Page
    "about.page.title": "About AlphaSploit",
    "about.page.description":
      "Leading the cybersecurity education revolution with innovative training programs and industry expertise.",
    "about.stats.students": "Students Trained",
    "about.stats.placement": "Job Placement Rate",
    "about.stats.experience": "Years Experience",
    "about.stats.clients": "Enterprise Clients",
    "about.company.title": "Company Overview",
    "about.company.p1":
      "AlphaSploit was founded with a singular vision: to create the most comprehensive and practical cybersecurity training programs in the industry. Our founders, seasoned cybersecurity professionals with extensive backgrounds in penetration testing, incident response, and security architecture, recognized the critical gap between academic cybersecurity education and real-world application.",
    "about.company.p2":
      "Since our inception, we have evolved into a premier training institution that combines theoretical knowledge with hands-on experience. Our state-of-the-art training facilities and virtual lab environments provide students with safe, controlled spaces to practice advanced cybersecurity techniques without risk to production systems.",
    "about.company.p3":
      "Today, AlphaSploit serves individuals, corporations, and government agencies worldwide, delivering customized training solutions that address specific security challenges and career development goals. Our alumni network spans across Fortune 500 companies, leading cybersecurity firms, and critical infrastructure organizations.",
    "about.mission.title": "Our Mission",
    "about.mission.content":
      "To empower cybersecurity professionals with the knowledge, skills, and ethical foundation necessary to protect organizations and individuals from evolving cyber threats. We are committed to delivering world-class training that bridges the gap between theory and practice, fostering a community of skilled defenders who uphold the highest standards of cybersecurity excellence.",
    "about.vision.title": "Our Vision",
    "about.vision.content":
      "To be the global leader in cybersecurity education, recognized for our innovative training methodologies, industry partnerships, and the exceptional caliber of professionals we develop. We envision a world where every organization has access to skilled cybersecurity professionals trained to the highest standards, creating a more secure digital future for all.",
    "about.why.title": "Why Choose AlphaSploit?",

    // Services Page
    "services.page.title": "Our Services",
    "services.page.description":
      "Comprehensive cybersecurity training programs designed to build expertise and advance careers in information security.",
    "services.core.title": "Core Training Programs",
    "services.specialized.title": "Specialized Training",
    "services.formats.title": "Flexible Training Options",
    "services.formats.inPerson": "In-Person Training",
    "services.formats.inPersonDesc":
      "Immersive classroom experience with hands-on labs and direct instructor interaction.",
    "services.formats.virtual": "Virtual Training",
    "services.formats.virtualDesc": "Live online sessions with interactive labs accessible from anywhere in the world.",
    "services.formats.corporate": "Corporate Training",
    "services.formats.corporateDesc":
      "Customized on-site training programs tailored to your organization's specific needs.",
    "services.cta.title": "Ready to Start Your Training Journey?",
    "services.cta.description":
      "Contact us to discuss your training needs and find the perfect program to advance your cybersecurity career.",
    "services.cta.button": "Get Started Today",

    // Workshop Pages
    "workshops.page.title": "Upcoming Workshops",
    "workshops.page.description":
      "Plan your cybersecurity learning journey with our comprehensive workshop calendar. Choose from beginner to advanced level training sessions.",
    "workshops.calendar": "Workshop Calendar",
    "workshops.list": "All Workshops",
    "workshops.search": "Search workshops...",
    "workshops.levels.all": "All Levels",
    "workshops.levels.beginner": "Beginner",
    "workshops.levels.intermediate": "Intermediate",
    "workshops.levels.advanced": "Advanced",
    "workshops.types.all": "All Types",
    "workshops.types.virtual": "Virtual Only",
    "workshops.types.inPerson": "In-Person",
    "workshops.legend.title": "Workshop Levels",
    "workshops.legend.beginner": "Beginner - No prior experience required",
    "workshops.legend.intermediate": "Intermediate - Basic cybersecurity knowledge recommended",
    "workshops.legend.advanced": "Advanced - Extensive experience required",
    "workshops.cta.title": "Can't Find What You're Looking For?",
    "workshops.cta.description":
      "We offer custom workshops and corporate training programs tailored to your organization's specific needs. Contact us to discuss your requirements.",
    "workshops.cta.button": "Request Custom Workshop",

    // YouTube Workshops Component
    "youtube.badge": "From Our YouTube Channel",
    "youtube.title": "Free Educational Content",
    "youtube.description":
      "Watch our latest cybersecurity tutorials and educational content directly from the AlphaSploit YouTube channel. Over 1000+ subscribers are already learning with us through our comprehensive video library!",
    "youtube.visitChannel": "Visit Our YouTube Channel",
    "youtube.joinDiscord": "Join Our Discord",
    "youtube.watchNow": "Watch Now",
    "youtube.workshops.badge": "Live Workshops",
    "youtube.workshops.title": "Hands-On Workshops",
    "youtube.workshops.description":
      "Join our interactive workshops for intensive, hands-on cybersecurity training. We've successfully conducted 50+ workshops with hundreds of satisfied participants.",
    "youtube.upcoming": "Upcoming Workshops",
    "youtube.completed": "Recently Completed Workshops",
    "youtube.viewDetails": "View Details & Register",
    "youtube.registerNow": "Register Now",
    "youtube.workshopCompleted": "Workshop Completed",
    "youtube.customWorkshops": "Want to host a workshop at your organization or suggest a topic?",
    "youtube.contactCustom": "Contact Us for Custom Workshops",

    // Workshop Detail Pages
    "workshop.backToWorkshops": "Back to Workshops",
    "workshop.share": "Share",
    "workshop.whatsapp": "WhatsApp",
    "workshop.presenter": "Workshop Presenter",
    "workshop.overview": "Course Overview",
    "workshop.requirements": "Technical Requirements",
    "workshop.whatYouLearn": "What You'll Learn",
    "workshop.agenda": "Workshop Agenda",
    "workshop.included": "What's Included",
    "workshop.testimonials": "What Participants Say",
    "workshop.register": "Register Now",
    "workshop.registerForm": "Register via Google Form",
    "workshop.secureRegistration": "Secure registration through Google Forms",
    "workshop.questions": "Questions? Contact us for assistance",
    "workshop.location": "Location Details",
    "workshop.prerequisites": "Prerequisites",

    // Common
    "common.date": "Date",
    "common.time": "Time",
    "common.duration": "Duration",
    "common.price": "Price",
    "common.level": "Level",
    "common.type": "Type",
    "common.availability": "Availability",
    "common.participants": "Participants",
    "common.rating": "Rating",
    "common.views": "views",
    "common.today": "Today",
    "common.calendar": "Calendar",
    "common.list": "List",
  },
  so: {
    // Navigation
    "nav.home": "Guriga",
    "nav.about": "Naga",
    "nav.services": "Adeegyo",
    "nav.workshops": "Tababarro",
    "nav.contact": "Xiriir",
    "nav.getStarted": "Bilow",

    // Hero Section
    "hero.badge": "🚀 Shirkadda Horumarinta Amniga Teknoolajiyada ee Hogaaminta",
    "hero.title": "AlphaSploit",
    "hero.subtitle": "Tababarka Amniga Teknoolajiyada ee Heer Sare",
    "hero.description":
      "Iyada oo ku saleysan taariikhdayada la xaqiijiyay ee qabashada tababarro amni teknoolajiyadeed iyo abuurista macluumaad waxbarasho ah oo YouTube ah, waxaan sii wadaynaa bixinta tababar khibrad leh oo amni teknoolajiyadeed ah iyada oo loo marayo tababarradayada iyo kheyraadka waxbarasho. Ku biir kumanaan ka mid ah kuwa horay u raacaya tababarradayada iyo kanaalka YouTube.",
    "hero.getEarlyAccess": "Hel Gelitaan Hore",
    "hero.joinWaitlist": "Ku Biir Liiska Sugitaanka",
    "hero.workshopsConducted": "Tababarro La Qabtay",
    "hero.coursesInDevelopment": "Koorsooyin Horumarintooda",
    "hero.youtubeSubscribers": "Macmiilayaasha YouTube",
    "hero.globalCommunity": "Bulshada Caalamiga ah",

    // About Section
    "about.badge": "Ku Saabsan AlphaSploit",
    "about.title": "Dhisidda Difaacayaasha",
    "about.titleHighlight": " Cyber-ka Berrito",
    "about.description1":
      "AlphaSploit waxay si firfircoon u qabatay tababarro amni teknoolajiyadeed waxayna abuuraysay macluumaad waxbarasho ah oo YouTube ah, iyada oo dhisaysa bulsho ardayaal ah oo xiisaynaya amniga teknoolajiyada. Waxaa aasaasay khibradayaal warshadeed oo leh khibrad tobanaan sano ah oo isku duuban, hadda waxaan ballaarinayaa qaabkayaga tababarka la xaqiijiyay ee adeegga tababar khadar ah oo dhamaystiran.",
    "about.description2":
      "Habkayaga tababar gacanta ku haya iyo casharrada YouTube ee soo jiidashada leh ayaa horay u caawiyay boqolaal shaqaale ah inay kor u qaadaan xirfadahooda amniga teknoolajiyada. Hadda waxaan ballaarinayaa habkan la xaqiijiyay oo ah barnaamijyo shahaado la siinayo oo diyaar u noqon doona online, taas oo ka dhigaysa tababarkayaga khibradda leh mid la heli karo cid kasta oo adduunka ah.",
    "about.learnMore": "Wax Badan Ka Baro Annaga",

    // Services
    "services.badge": "Adeegyadayada",
    "services.title": "Barnaamijyo Tababar oo Dhamaystiran",
    "services.description":
      "Laga bilaabo fikradaha aasaasiga ah ilaa farsamooyinka horumarsan, barnaamijyadayadu waxay loogu talagalay inay kor u qaadaan khibradaada amniga teknoolajiyada oo ay dedejiyaan kobaca shaqadaada.",
    "services.contactForTraining": "Nala Soo Xiriir Tababarka",
    "services.mostPopular": "🔥 UGU CAANSAN",
    "services.additionalSpecializations": "Takhasuusyo Dheeraad ah",

    // Service Items
    "service.ethicalHacking.title": "Hacking Anshaxa leh",
    "service.ethicalHacking.description":
      "Ku takhasuus imtixaanka dhaqdhaqaaqa, qiimaynta nuglaanta, iyo dhaqamada daaha ka qaadista mas'uulka leh iyada oo la adeegsanayo makhadyo gacanta ku haya.",
    "service.socAnalyst.title": "Tababarka Falanqeeyaha SOC",
    "service.socAnalyst.description":
      "Noqo falanqeeyaha xarunta hawlgallada amniga ee xirfadda leh oo leh tababar adag oo ku saabsan ogaanshaha halis iyo jawaabta dhacdada.",
    "service.redTeaming.title": "Kooxda Cas",
    "service.redTeaming.description":
      "Jilitaanka cadowga horumarsan oo daboolaya farsamooyinka weerarka casrigan iyo xeeladaha dhuumasho.",
    "service.workshops.title": "Tababarro Amni Teknoolajiyadeed",
    "service.workshops.description":
      "Tababarro gaar ah oo ku saabsan halista soo kordhaysa, teknoolajiyada cusub, iyo fikradaha amniga horumarsan.",

    // Testimonials
    "testimonials.badge": "Marag",
    "testimonials.title": "Sheekooyinka Guusha ee Ardaydayada",
    "testimonials.description":
      "Ka dhegayso xirfadlayaasha amniga teknoolajiyada kuwa beddelay shaqadooda iyagoo adeegsanaya barnaamijyadayada tababarka.",

    // Newsletter
    "newsletter.badge": "📧 La Socod",
    "newsletter.title": "La Socod Macluumaadkayaga",
    "newsletter.titleHighlight": " Ugu Dambeeyay",
    "newsletter.description":
      "Ku biir bulshadeenna si aad u hesho macluumaadka ugu dambeeyay ee amniga teknoolajiyada, ogeysiisyada tababarka, iyo macluumaadka waxbarasho. Ogow tababarrada soo socda iyo fursadaha tababarka gaarka ah.",
    "newsletter.placeholder": "Geli ciwaankaaga email-ka",
    "newsletter.subscribe": "Hadda Isdiiwaangeli",
    "newsletter.threatIntel": "Macluumaadka Halista",
    "newsletter.threatIntelDesc": "Halisyada amniga teknoolajiyada iyo nuglaanta ugu dambeeyay",
    "newsletter.trainingTips": "Talooyinka Tababarka",
    "newsletter.trainingTipsDesc": "Talo khibrad leh iyo kheyraadka waxbarasho",
    "newsletter.exclusiveOffers": "Bixitaanno Gaar ah",
    "newsletter.exclusiveOffersDesc": "Gelitaan hore iyo dhimis gaar ah",

    // Contact
    "contact.title": "Nala Soo Xiriir",
    "contact.description":
      "Ma diyaar u tahay inaad horumarisid shaqadaada amniga teknoolajiyada? Nala soo xiriir kooxdayada si aad ula tashadid doorashooyinka tababarka oo aad u hesho barnaamijka kugu habboon.",
    "contact.sendMessage": "Noo Dir Fariinta",
    "contact.formDescription": "Buuxi foomka hoose waxaanan kugula soo noqon doonaa 24 saacadood gudahood.",
    "contact.name": "Magaca",
    "contact.email": "Email",
    "contact.subject": "Mawduuca",
    "contact.message": "Fariinta",
    "contact.send": "Dir Fariinta",
    "contact.getInTouch": "Nala Soo Xiriir",
    "contact.multipleWays": "Siyaabo badan oo aad ugu gaari karto kooxdayada taageerada iyo weydiimaha.",
    "contact.phone": "Telefoon",
    "contact.whatsapp": "WhatsApp",
    "contact.address": "Cinwaanka",
    "contact.businessHours": "Saacadaha Shaqada",

    // About Page
    "about.page.title": "Ku Saabsan AlphaSploit",
    "about.page.description":
      "Hogaaminta kacaanka waxbarashada amniga teknoolajiyada iyada oo leh barnaamijyo tababar oo hal-abuur leh iyo khibradda warshadeed.",
    "about.stats.students": "Ardayaal La Tababaray",
    "about.stats.placement": "Heerka Helitaanka Shaqada",
    "about.stats.experience": "Sanado Khibrad",
    "about.stats.clients": "Macaamiisha Ganacsiga",
    "about.company.title": "Dulmar Shirkadeed",
    "about.company.p1":
      "AlphaSploit waxaa la aasaasay iyada oo leh hal aragti: in la abuuro barnaamijyada tababarka amniga teknoolajiyada ugu dhamaystiran uguna wax ku ool ah warshadda. Aasaasayaashayada, kuwaas oo ah xirfadlayaal amni teknoolajiyadeed oo khibrad u leh asalka imtixaanka dhaqdhaqaaqa, jawaabta dhacdada, iyo naqshadaynta amniga, waxay ogaadeen farqiga muhiimka ah ee u dhexeeya waxbarashada amniga teknoolajiyada ee akadeemiga iyo codsashada dhabta ah.",
    "about.company.p2":
      "Tan iyo bilowgayaga, waxaan u kobcnay machadka tababarka heer sare ah ee isku darka aqoonta aragtida iyo khibradda gacanta ku haya. Xarumahayaga tababarka casriga ah iyo deegaanka makhadyada virtual-ka ah waxay siiyaan ardayda meelo ammaan ah oo la xakameeyay si ay ugu dhaqmaan farsamooyinka amniga teknoolajiyada ee horumarsan iyada oo aan halis ku jirin nidaamyada wax soo saarka.",
    "about.company.p3":
      "Maanta, AlphaSploit waxay u adeegtaa shakhsiyaad, shirkado, iyo hay'ado dawladeed adduunka oo dhan, iyada oo bixisa xalalka tababarka la habeeyay kuwaas oo wax ka qabta caqabadaha amniga gaarka ah iyo yoolalka horumarinta shaqada. Shabakadda ardaydayada waxay ku fidsan tahay shirkadaha Fortune 500, shirkadaha amniga teknoolajiyada ee hogaaminta, iyo ururada kaabayaasha muhiimka ah.",
    "about.mission.title": "Hadafkayaga",
    "about.mission.content":
      "In aan xoojino xirfadlayaasha amniga teknoolajiyada aqoonta, xirfadaha, iyo aasaaska anshaxa ee lagama maarmaan u ah ilaalinta ururada iyo shakhsiyaadka halisyada cyber-ka ee kobcaya. Waxaan u ballan qaadnay inaan bixino tababar heer caalami ah oo buuxiya farqiga u dhexeeya aragtida iyo dhaqanka, kor u qaadida bulsho xirfadlayaal difaac ah oo taageeraya heerarka ugu sarreeya ee fiicnanta amniga teknoolajiyada.",
    "about.vision.title": "Aragtidayada",
    "about.vision.content":
      "In aan noqono hogaamiyaha caalamiga ah ee waxbarashada amniga teknoolajiyada, oo loo aqoonsado habayada tababarka hal-abuurka ah, iskaashiga warshadeed, iyo tayada gaar ah ee xirfadlayaasha aan horumarinno. Waxaan ku aragtaa adduun ay ku jirto urur kasta oo heli kara xirfadlayaal amni teknoolajiyadeed oo la tababaray heerarka ugu sarreeya, abuurida mustaqbal dijital oo ka ammaan badan dhammaan.",
    "about.why.title": "Maxaad U Doorataa AlphaSploit?",

    // Services Page
    "services.page.title": "Adeegyadayada",
    "services.page.description":
      "Barnaamijyo tababar amni teknoolajiyadeed oo dhamaystiran oo loogu talagalay dhisidda khibradda iyo horumarinta shaqooyinka macluumaadka amniga.",
    "services.core.title": "Barnaamijyada Tababarka Aasaasiga ah",
    "services.specialized.title": "Tababar Takhasuus ah",
    "services.formats.title": "Doorashooyin Tababar oo Dabacsan",
    "services.formats.inPerson": "Tababar Shakhsi ahaan",
    "services.formats.inPersonDesc":
      "Khibrad fasalka lagu dhex maro oo leh makhadyo gacanta ku haya iyo isdhexgal toos ah oo macallin.",
    "services.formats.virtual": "Tababar Virtual",
    "services.formats.virtualDesc":
      "Fadhiyo toos ah oo online ah oo leh makhadyo isdhexgal ah oo laga heli karo meel kasta oo adduunka ah.",
    "services.formats.corporate": "Tababar Shirkadeed",
    "services.formats.corporateDesc":
      "Barnaamijyo tababar oo goobta lagu qabto oo loo habeeyay baahiyaha gaarka ah ee ururkaaga.",
    "services.cta.title": "Ma Diyaar u Tahay Inaad Bilowdo Safarkaga Tababarka?",
    "services.cta.description":
      "Nala soo xiriir si aan ula tashanno baahiyahaaga tababarka oo aad u hesho barnaamijka ku habboon si aad u horumarisid shaqadaada amniga teknoolajiyada.",
    "services.cta.button": "Maanta Bilow",

    // Workshop Pages
    "workshops.page.title": "Tababarro Soo Socda",
    "workshops.page.description":
      "Qorsheynta safarkaga waxbarashada amniga teknoolajiyada iyada oo leh jadwalka tababarradayada oo dhamaystiran. Ka dooro heerarka bilow ilaa horumarsan ee fadhiyada tababarka.",
    "workshops.calendar": "Jadwalka Tababarrada",
    "workshops.list": "Dhammaan Tababarrada",
    "workshops.search": "Raadi tababarro...",
    "workshops.levels.all": "Dhammaan Heerarka",
    "workshops.levels.beginner": "Bilow",
    "workshops.levels.intermediate": "Dhexdhexaad",
    "workshops.levels.advanced": "Horumarsan",
    "workshops.types.all": "Dhammaan Noocyada",
    "workshops.types.virtual": "Virtual Kaliya",
    "workshops.types.inPerson": "Shakhsi ahaan",
    "workshops.legend.title": "Heerarka Tababarrada",
    "workshops.legend.beginner": "Bilow - Khibrad hore looma baahna",
    "workshops.legend.intermediate": "Dhexdhexaad - Aqoonta aasaasiga ah ee amniga teknoolajiyada waa la talinayaa",
    "workshops.legend.advanced": "Horumarsan - Khibrad ballaaran ayaa loo baahan yahay",
    "workshops.cta.title": "Ma Heli Kartid Wixii Aad Raadinaysay?",
    "workshops.cta.description":
      "Waxaan bixinnaa tababarro gaar ah iyo barnaamijyo tababar shirkadeed oo loo habeeyay baahiyaha gaarka ah ee ururkaaga. Nala soo xiriir si aan ula tashanno shuruudahaaga.",
    "workshops.cta.button": "Codso Tababar Gaar ah",

    // YouTube Workshops Component
    "youtube.badge": "Ka Yimid Kanaalka YouTube-kayaga",
    "youtube.title": "Macluumaad Waxbarasho oo Bilaash ah",
    "youtube.description":
      "Daawada casharradayada ugu dambeeyay ee amniga teknoolajiyada iyo macluumaadka waxbarasho toos uga yimid kanaalka AlphaSploit YouTube. In ka badan 1000+ macmiil ayaa horay ula baranaya iyagoo adeegsanaya maktabadayada fiidiyaha oo dhamaystiran!",
    "youtube.visitChannel": "Booqo Kanaalka YouTube-kayaga",
    "youtube.joinDiscord": "Ku Biir Discord-kayaga",
    "youtube.watchNow": "Hadda Daawad",
    "youtube.workshops.badge": "Tababarro Toos ah",
    "youtube.workshops.title": "Tababarro Gacanta ku Haya",
    "youtube.workshops.description":
      "Ku biir tababarradayada isdhexgalka leh ee tababarka adag, gacanta ku haya ee amniga teknoolajiyada. Waxaan si guul leh u qabanay 50+ tababar oo leh boqolaal ka qayb qaate oo qanacsan.",
    "youtube.upcoming": "Tababarro Soo Socda",
    "youtube.completed": "Tababarro Dhawaan La Dhammeeyay",
    "youtube.viewDetails": "Eeg Faahfaahinta & Isdiiwaangeli",
    "youtube.registerNow": "Hadda Isdiiwaangeli",
    "youtube.workshopCompleted": "Tababarka Waa La Dhammeeyay",
    "youtube.customWorkshops": "Ma rabtaa inaad tababar ku qabato ururkaaga ama aad soo jeediso mawduuc?",
    "youtube.contactCustom": "Nala Soo Xiriir Tababarro Gaar ah",

    // Workshop Detail Pages
    "workshop.backToWorkshops": "Ku Noqo Tababarrada",
    "workshop.share": "Wadaag",
    "workshop.whatsapp": "WhatsApp",
    "workshop.presenter": "Soo Bandhigaha Tababarka",
    "workshop.overview": "Dulmar Koorsada",
    "workshop.requirements": "Shuruudaha Farsamada",
    "workshop.whatYouLearn": "Waxaad Baran Doonto",
    "workshop.agenda": "Jadwalka Tababarka",
    "workshop.included": "Waxaa Ku Jira",
    "workshop.testimonials": "Waxaa Ka Qayb Qaatayaashu Yiraahdaan",
    "workshop.register": "Hadda Isdiiwaangeli",
    "workshop.registerForm": "Isdiiwaangeli iyada oo loo marayo Google Form",
    "workshop.secureRegistration": "Diiwaan gelinta ammaan ah oo loo marayo Google Forms",
    "workshop.questions": "Su'aalo? Nala soo xiriir caawimo",
    "workshop.location": "Faahfaahinta Goobta",
    "workshop.prerequisites": "Shuruudaha Hore",

    // Common
    "common.date": "Taariikhda",
    "common.time": "Waqtiga",
    "common.duration": "Muddada",
    "common.price": "Qiimaha",
    "common.level": "Heerka",
    "common.type": "Nooca",
    "common.availability": "Diyaarnimada",
    "common.participants": "Ka Qayb Qaatayaasha",
    "common.rating": "Qiimaynta",
    "common.views": "daawasho",
    "common.today": "Maanta",
    "common.calendar": "Jadwal",
    "common.list": "Liiska",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "so")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

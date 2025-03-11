const degreesByGroup = {
    "Economics": ["BA Economics", "BSc Economics", "BCom Economics", "BBA Economics","BA Applied Economics","BA Business Economics","BA Financial Economics","BA Development Economics","BSc Data Science & Economics","BSc Statistics & Economics"],
    "Commerce": ["BCom General", "BCom Accounting", "BCom Finance", "BCom Banking & Insurance","BCom Financial Markets","BCom Auditing","BCom Risk & Insurance Management","BCom Business Administration","BCom Business Analytics","BCom Corporate Secretaryship","BCom Business Process Services","BCom Computer Applications","BCom E-Commerce","BCom Digital Marketing"],
    "Accounts": ["BCom Accounting", "BBA Finance", "BCom Taxation", "BCom Cost Accounting","BCom Accounting & Finance","BCom Professional Accounting","BCom Cost & Management Accounting","BCom Corporate Accounting","BCom General Accounting","BCom GST & Tax Procedures","BCom Financial Services","BCom Investment Banking","BCom Banking & Insurance","BCom International Accounting & Finance","BCom E-Commerce & Accounting","BCom Fintech & Digital Accounting"],
    "Business Statistics": ["BBA Business Analytics", "BSc Statistics", "BCom Business Statistics","BSc Data Science & Business Analytics","BSc Applied Statistics & Analytics","BCom Financial Analytics","BSc Economics & Business Statistics","BBA Financial & Business Analytics","BSc AI & Business Intelligence","BBA HR & Business Intelligence"],
    "Computer Application": ["BCA", "BSc Computer Applications", "BSc IT", "BSc Data Science","BCom Computer Applications","BCA Artificial Intelligence & Machine Learning","BCA Data Science","BCA Internet of Things ","BCA Mobile Application Development",],
    "Mathematics": ["BSc Mathematics", "BA Mathematics", "BSc Actuarial Science","BTech Mathematics & Computing","BSc Industrial Mathematics","BSc Operations Research & Mathematics"],
    "Physics": ["BSc Physics", "BTech Engineering Physics","BTech Nano Science & Nanotechnology","BSc Physics with Data Science","BSc Electronics & Physics"],
    "Chemistry": ["BSc Chemistry", "BSc Biochemistry","BSc Pharmaceutical Chemistry","BSc Forensic Chemistry","BTech Chemical Engineering","BTech Polymer Science & Engineering","BTech Oil & Paint Technology"],
    "Biology": ["BSc Biology", "BSc Biotechnology", "BSc Microbiology","BSc Botany","BSc Genetics","BSc Zoology","BSc Food Science & Nutrition","BSc Forensic Science","BSc Nursing","MBBS (Bachelor of Medicine & Bachelor of Surgery)","BDS (Bachelor of Dental Surgery)","BAMS (Ayurvedic Medicine)","BHMS (Homeopathic Medicine),","BVSc (Veterinary Science)","BSc Physiotherapy","BSc Radiology & Imaging Science","BSc Clinical Research","BSc Pharmacology","BTech Genetic Engineering","BTech Biomedical Engineering"],
    "Computer Science": ["BSc Computer Science", "BTech Computer Science", "BSc AI & ML","BTech Software Engineering","BTech Data Science & AI","BTech Cybersecurity","BTech Cloud Computing","BTech Blockchain Technology","BTech Internet of Things (IoT)","BTech Game Development","BTech Big Data Analytics","BTech Augmented & Virtual Reality (AR/VR)",,"BE Computer Science & Engineering (CSE)","BTech Software Engineering",],
    "History": ["BA History", "BA Political Science","BA Ancient History","BA Modern History","BA Archaeology","BA Anthropology & History","BA International Relations & History","BA Cultural Studies","BA Heritage & Museum Studies",""],
    "Agriculture": ["BSc Agriculture", "BTech Agriculture Engineering","BSc Horticulture","BSc Agronomy","BSc Crop Science","BSc Plant Pathology","BSc Forestry","BSc Animal Husbandry","BSc Fisheries Science","BSc Dairy Science","BSc Food Technology","BSc Agricultural Economics"]
};


const degreeDetails = {
    "BA Economics": {
        cutoff: "80%",
        futureScope: ["Higher studies in Economics", "Research opportunities", "Government jobs", "Corporate Sector"],
        careers: ["Economist", "Financial Analyst", "Market Research Analyst", "Policy Advisor"]
    },
    "BSc Economics": {
        cutoff: "82%",
        futureScope: ["Data Analytics", "Economic Policy Making", "Business Strategy", "Consulting"],
        careers: ["Economist", "Data Analyst", "Policy Advisor", "Economic Consultant"]
    },
    "BCom Economics": {
        cutoff: "78%",
        futureScope: ["Finance and Banking", "Stock Market Analysis", "Business Development", "Entrepreneurship"],
        careers: ["Financial Analyst", "Stock Broker", "Banking Officer", "Investment Consultant"]
    },
    "BBA Economics": {
        cutoff: "75%",
        futureScope: ["Corporate Economics", "Market Research", "Business Consulting", "Management"],
        careers: ["Business Analyst", "Market Researcher", "Management Consultant", "Economic Strategist"]
    },
    "BA Applied Economics": {
        cutoff: "80%",
        futureScope: ["Applied Research", "Public Policy", "Corporate Strategy"],
        careers: ["Economic Consultant", "Data Analyst", "Public Policy Advisor", "Strategic Planner"]
    },
    "BA Business Economics": {
        cutoff: "78%",
        futureScope: ["Business Strategy", "Economic Forecasting", "Entrepreneurship"],
        careers: ["Business Economist", "Market Analyst", "Business Strategist", "Corporate Planner"]
    },
    "BA Financial Economics": {
        cutoff: "82%",
        futureScope: ["Financial Analysis", "Investment Banking", "Wealth Management"],
        careers: ["Financial Analyst", "Investment Banker", "Risk Manager", "Portfolio Manager"]
    },
    "BA Development Economics": {
        cutoff: "80%",
        futureScope: ["International Development", "Public Policy", "NGO & Non-Profit Sector"],
        careers: ["Development Economist", "Policy Analyst", "Social Entrepreneur", "International Consultant"]
    },
    "BSc Data Science & Economics": {
        cutoff: "85%",
        futureScope: ["Data Analytics", "Predictive Modeling", "Economic Forecasting"],
        careers: ["Data Scientist", "Economic Analyst", "Financial Data Consultant", "Risk Analyst"]
    },
    "BSc Statistics & Economics": {
        cutoff: "83%",
        futureScope: ["Statistical Research", "Econometrics", "Actuarial Science"],
        careers: ["Statistician", "Economist", "Actuarial Analyst", "Research Scientist"]
    },
     "BCom General": {
        cutoff: "75%",
        futureScope: ["Corporate Jobs", "Accounting & Auditing", "Banking", "Entrepreneurship"],
        careers: ["Accountant", "Banker", "Financial Consultant", "Tax Consultant"]
    },
    "BCom Accounting": {
        cutoff: "78%",
        futureScope: ["Chartered Accountancy", "Auditing", "Taxation", "Corporate Finance"],
        careers: ["Accountant", "Auditor", "Financial Manager", "Tax Advisor"]
    },
    "BCom Finance": {
        cutoff: "80%",
        futureScope: ["Investment Banking", "Stock Trading", "Financial Services"],
        careers: ["Financial Analyst", "Investment Banker", "Portfolio Manager", "Risk Manager"]
    },
    "BCom Banking & Insurance": {
        cutoff: "77%",
        futureScope: ["Retail Banking", "Risk Management", "Insurance Sector"],
        careers: ["Bank Manager", "Insurance Officer", "Risk Analyst", "Financial Planner"]
    },
    "BCom Financial Markets": {
        cutoff: "80%",
        futureScope: ["Stock Market Analysis", "Financial Planning", "Hedge Fund Management"],
        careers: ["Stock Broker", "Financial Advisor", "Investment Consultant", "Wealth Manager"]
    },
    "BCom Auditing": {
        cutoff: "79%",
        futureScope: ["Auditing Firms", "Tax Consultancy", "Corporate Compliance"],
        careers: ["Internal Auditor", "Forensic Auditor", "Chartered Accountant", "Compliance Officer"]
    },
    "BCom Risk & Insurance Management": {
        cutoff: "78%",
        futureScope: ["Risk Assessment", "Insurance Underwriting", "Actuarial Science"],
        careers: ["Risk Analyst", "Insurance Underwriter", "Actuary", "Financial Risk Manager"]
    },
    "BCom Business Administration": {
        cutoff: "76%",
        futureScope: ["Business Management", "Corporate Strategy", "Entrepreneurship"],
        careers: ["Business Consultant", "Operations Manager", "HR Manager", "Corporate Strategist"]
    },
    "BCom Business Analytics": {
        cutoff: "82%",
        futureScope: ["Data Analytics", "Business Intelligence", "Market Research"],
        careers: ["Business Analyst", "Market Researcher", "Data Analyst", "Strategy Consultant"]
    },
    "BCom Corporate Secretaryship": {
        cutoff: "78%",
        futureScope: ["Company Law", "Corporate Governance", "Regulatory Compliance"],
        careers: ["Company Secretary", "Legal Advisor", "Corporate Consultant", "Compliance Officer"]
    },
    "BCom Business Process Services": {
        cutoff: "75%",
        futureScope: ["BPO Management", "Process Optimization", "Customer Relationship Management"],
        careers: ["Process Manager", "Operations Analyst", "Client Relationship Manager", "BPO Consultant"]
    },
    "BCom Computer Applications": {
        cutoff: "80%",
        futureScope: ["IT and Business Integration", "Software Development", "E-commerce"],
        careers: ["Business Analyst", "Software Developer", "System Administrator", "IT Consultant"]
    },
    "BCom E-Commerce": {
        cutoff: "79%",
        futureScope: ["E-Business Development", "Digital Marketing", "Retail Management"],
        careers: ["E-commerce Manager", "Digital Marketing Specialist", "Online Business Strategist", "SEO Analyst"]
    },
    "BCom Digital Marketing": {
        cutoff: "78%",
        futureScope: ["SEO & SEM", "Content Marketing", "Social Media Management"],
        careers: ["Digital Marketer", "Social Media Manager", "SEO Specialist", "Brand Strategist"]
    },
    "BCom Accounting": {
        cutoff: "78%",
        futureScope: ["Chartered Accountancy", "Auditing", "Taxation", "Corporate Finance"],
        careers: ["Accountant", "Auditor", "Financial Manager", "Tax Advisor"]
    },
    "BBA Finance": {
        cutoff: "80%",
        futureScope: ["Investment Banking", "Corporate Finance", "Financial Planning"],
        careers: ["Financial Analyst", "Investment Banker", "Wealth Manager", "Finance Manager"]
    },
    "BCom Taxation": {
        cutoff: "78%",
        futureScope: ["Tax Consulting", "Auditing", "Financial Law"],
        careers: ["Tax Consultant", "Chartered Accountant", "Revenue Officer", "Tax Auditor"]
    },
    "BCom Cost Accounting": {
        cutoff: "79%",
        futureScope: ["Cost Management", "Corporate Finance", "Budgeting"],
        careers: ["Cost Accountant", "Financial Controller", "Business Consultant"]
    },
    "BCom Accounting & Finance": {
        cutoff: "80%",
        futureScope: ["Financial Services", "Investment Management", "Corporate Accounting"],
        careers: ["Financial Analyst", "Chartered Accountant", "Finance Manager"]
    },
    "BCom Professional Accounting": {
        cutoff: "82%",
        futureScope: ["Certified Professional Accountant", "Forensic Accounting", "Risk Management"],
        careers: ["Professional Accountant", "Financial Consultant", "Risk Analyst"]
    },
    "BCom Cost & Management Accounting": {
        cutoff: "80%",
        futureScope: ["Cost Analysis", "Financial Controlling", "Management Accounting"],
        careers: ["Cost Accountant", "Budget Analyst", "Corporate Finance Manager"]
    },
    "BCom Corporate Accounting": {
        cutoff: "78%",
        futureScope: ["Corporate Finance", "Stock Market Analysis", "Company Law"],
        careers: ["Corporate Accountant", "Financial Consultant", "Investment Analyst"]
    },
    "BCom General Accounting": {
        cutoff: "75%",
        futureScope: ["Bookkeeping", "Corporate Accounting", "Financial Planning"],
        careers: ["Accountant", "Finance Assistant", "Tax Consultant"]
    },
    "BCom GST & Tax Procedures": {
        cutoff: "80%",
        futureScope: ["GST Consulting", "Tax Auditing", "Indirect Taxation"],
        careers: ["GST Consultant", "Tax Auditor", "Indirect Tax Specialist"]
    },
    "BCom Financial Services": {
        cutoff: "82%",
        futureScope: ["Banking", "Insurance", "Financial Consulting"],
        careers: ["Financial Advisor", "Banking Officer", "Investment Consultant"]
    },
    "BCom Investment Banking": {
        cutoff: "85%",
        futureScope: ["Stock Market Analysis", "Wealth Management", "Private Equity"],
        careers: ["Investment Banker", "Financial Analyst", "Portfolio Manager"]
    },
    "BCom Banking & Insurance": {
        cutoff: "77%",
        futureScope: ["Retail Banking", "Risk Management", "Insurance Sector"],
        careers: ["Bank Manager", "Insurance Officer", "Risk Analyst"]
    },
    "BCom International Accounting & Finance": {
        cutoff: "83%",
        futureScope: ["Global Accounting Standards", "International Financial Reporting", "Cross-Border Taxation"],
        careers: ["International Accountant", "Finance Manager", "Compliance Officer"]
    },
    "BCom E-Commerce & Accounting": {
        cutoff: "80%",
        futureScope: ["E-Business Accounting", "Digital Payment Systems", "Financial Tech"],
        careers: ["E-Commerce Accountant", "Finance Tech Consultant", "Online Business Strategist"]
    },
    "BCom Fintech & Digital Accounting": {
        cutoff: "85%",
        futureScope: ["Blockchain Accounting", "Cryptocurrency Finance", "Digital Payment Systems"],
        careers: ["Fintech Analyst", "Digital Accountant", "Financial Technology Consultant"]
    },
    "BBA Business Analytics": {
        cutoff: "75%",
        futureScope: ["Data Analytics", "Predictive Modeling", "Business Intelligence"],
        careers: ["Business Analyst", "Data Scientist", "Market Research Analyst", "Operations Manager"]
    },
    "BSc Statistics": {
        cutoff: "70%",
        futureScope: ["Statistical Modeling", "Risk Analysis", "Machine Learning"],
        careers: ["Statistician", "Actuary", "Risk Analyst", "Data Scientist"]
    },
    "BCom Business Statistics": {
        cutoff: "72%",
        futureScope: ["Financial Data Analytics", "Statistical Analysis", "Corporate Forecasting"],
        careers: ["Financial Analyst", "Business Consultant", "Risk Analyst", "Market Researcher"]
    },
    "BSc Data Science & Business Analytics": {
        cutoff: "78%",
        futureScope: ["Big Data Analytics", "AI & Machine Learning", "Data Visualization"],
        careers: ["Data Scientist", "AI Engineer", "Business Intelligence Developer", "Data Consultant"]
    },
    "BSc Applied Statistics & Analytics": {
        cutoff: "74%",
        futureScope: ["Statistical Computing", "Predictive Analytics", "Survey Research"],
        careers: ["Applied Statistician", "Quantitative Analyst", "Business Intelligence Analyst", "Econometrician"]
    },
    "BCom Financial Analytics": {
        cutoff: "75%",
        futureScope: ["Investment Analysis", "Risk Management", "Financial Forecasting"],
        careers: ["Investment Analyst", "Risk Manager", "Financial Data Analyst", "Stock Market Analyst"]
    },
    "BSc Economics & Business Statistics": {
        cutoff: "76%",
        futureScope: ["Economic Modeling", "Market Research", "Policy Analysis"],
        careers: ["Economic Analyst", "Market Researcher", "Policy Advisor", "Financial Consultant"]
    },
    "BBA Financial & Business Analytics": {
        cutoff: "77%",
        futureScope: ["Corporate Finance", "Data-Driven Decision Making", "Risk Forecasting"],
        careers: ["Financial Analyst", "Business Intelligence Manager", "Corporate Strategy Analyst", "Risk Consultant"]
    },
    "BSc AI & Business Intelligence": {
        cutoff: "80%",
        futureScope: ["AI in Business", "Automated Data Processing", "Deep Learning Models"],
        careers: ["AI Data Analyst", "BI Consultant", "Machine Learning Engineer", "AI Strategy Manager"]
    },
    "BBA HR & Business Intelligence": {
        cutoff: "72%",
        futureScope: ["HR Analytics", "Workforce Planning", "Talent Management"],
        careers: ["HR Analyst", "Workforce Planning Consultant", "HR Business Partner", "HR Tech Specialist"]
    },
    "BCA": {
        cutoff: "70%",
        futureScope: ["Software Development", "Web Development", "Cloud Computing"],
        careers: ["Software Developer", "System Analyst", "Web Developer", "Database Administrator"]
    },
    "BSc Computer Applications": {
        cutoff: "72%",
        futureScope: ["Application Development", "Cloud Computing", "IT Consulting"],
        careers: ["Application Developer", "IT Consultant", "UI/UX Designer", "Network Administrator"]
    },
    "BSc IT": {
        cutoff: "75%",
        futureScope: ["Cybersecurity", "Data Management", "Network Administration"],
        careers: ["IT Analyst", "Network Engineer", "Cybersecurity Specialist", "Cloud Engineer"]
    },
    "BSc Data Science": {
        cutoff: "78%",
        futureScope: ["AI & Machine Learning", "Big Data Analytics", "Data Visualization"],
        careers: ["Data Scientist", "Machine Learning Engineer", "BI Analyst", "Data Engineer"]
    },
    "BCom Computer Applications": {
        cutoff: "72%",
        futureScope: ["E-Commerce", "Digital Marketing", "FinTech Solutions"],
        careers: ["E-Commerce Analyst", "IT Auditor", "Digital Marketing Specialist", "ERP Consultant"]
    },
    "BCA Artificial Intelligence & Machine Learning": {
        cutoff: "80%",
        futureScope: ["AI Solutions Development", "Neural Networks", "Deep Learning"],
        careers: ["AI Engineer", "Machine Learning Developer", "NLP Engineer", "AI Consultant"]
    },
    "BCA Data Science": {
        cutoff: "78%",
        futureScope: ["Big Data Analytics", "Predictive Modeling", "Business Intelligence"],
        careers: ["Data Analyst", "Data Engineer", "BI Developer", "Data Consultant"]
    },
    "BCA Internet of Things": {
        cutoff: "76%",
        futureScope: ["IoT Security", "Embedded Systems", "Smart Technology"],
        careers: ["IoT Developer", "Embedded Systems Engineer", "IoT Security Specialist", "Smart Tech Consultant"]
    },
    "BCA Mobile Application Development": {
        cutoff: "74%",
        futureScope: ["Android/iOS Development", "Cross-Platform App Development", "Game Development"],
        careers: ["Mobile App Developer", "Game Developer", "UI/UX Designer", "App Security Engineer"]
    },
    "BSc Mathematics": {
        cutoff: "75%",
        futureScope: ["Data Analytics", "Mathematical Modeling", "Teaching & Research"],
        careers: ["Data Analyst", "Actuary", "Mathematics Professor", "Statistician"]
    },
    "BA Mathematics": {
        cutoff: "70%",
        futureScope: ["Banking & Finance", "Market Research", "Academia"],
        careers: ["Financial Analyst", "Market Researcher", "Mathematics Educator", "Quantitative Analyst"]
    },
    "BSc Actuarial Science": {
        cutoff: "80%",
        futureScope: ["Risk Analysis", "Insurance & Banking", "Investment Management"],
        careers: ["Actuary", "Risk Manager", "Insurance Analyst", "Pension Fund Manager"]
    },
    "BTech Mathematics & Computing": {
        cutoff: "85%",
        futureScope: ["Software Development", "AI & Machine Learning", "Financial Modeling"],
        careers: ["Software Engineer", "Quantitative Analyst", "AI Researcher", "Computational Scientist"]
    },
    "BSc Industrial Mathematics": {
        cutoff: "78%",
        futureScope: ["Operations Research", "Quality Control", "Manufacturing Analytics"],
        careers: ["Operations Research Analyst", "Quality Assurance Analyst", "Industrial Data Analyst"]
    },
    "BSc Operations Research & Mathematics": {
        cutoff: "80%",
        futureScope: ["Optimization Techniques", "Supply Chain Analytics", "Predictive Analytics"],
        careers: ["Operations Analyst", "Logistics Manager", "Supply Chain Consultant", "Predictive Modeler"]
    },
    "BSc Physics": {
        cutoff: "75%",
        futureScope: ["Research & Development", "Aerospace & Space Technology", "Data Science"],
        careers: ["Physicist", "Data Scientist", "Lab Technician", "Radiation Safety Officer"]
    },
    "BTech Engineering Physics": {
        cutoff: "85%",
        futureScope: ["Nanotechnology", "Semiconductors", "Artificial Intelligence & Robotics"],
        careers: ["Research Scientist", "Semiconductor Engineer", "Aerospace Engineer", "AI Specialist"]
    },
    "BTech Nano Science & Nanotechnology": {
        cutoff: "80%",
        futureScope: ["Biomedical Engineering", "Material Science", "Pharmaceutical Research"],
        careers: ["Nanotechnologist", "Biomedical Engineer", "Materials Scientist", "Pharmaceutical Researcher"]
    },
    "BSc Physics with Data Science": {
        cutoff: "78%",
        futureScope: ["Big Data Analytics", "Machine Learning", "Astronomy & Astrophysics"],
        careers: ["Data Scientist", "Astrophysicist", "Computational Physicist", "AI Engineer"]
    },
    "BSc Electronics & Physics": {
        cutoff: "77%",
        futureScope: ["Electronics Manufacturing", "Telecommunications", "Embedded Systems"],
        careers: ["Electronics Engineer", "Embedded Systems Developer", "Telecom Specialist", "Circuit Designer"]
    },
    "BSc Chemistry": {
        cutoff: "75%",
        futureScope: ["Chemical Research", "Pharmaceuticals", "Material Science"],
        careers: ["Chemist", "Quality Control Analyst", "Pharmaceutical Scientist", "Chemical Lab Technician"]
    },
    "BSc Biochemistry": {
        cutoff: "78%",
        futureScope: ["Biomedical Research", "Genetic Engineering", "Pharmaceutical Industry"],
        careers: ["Biochemist", "Clinical Research Associate", "Geneticist", "Biomedical Scientist"]
    },
    "BSc Pharmaceutical Chemistry": {
        cutoff: "80%",
        futureScope: ["Drug Development", "Pharmaceutical R&D", "Quality Control"],
        careers: ["Pharmaceutical Scientist", "Formulation Chemist", "Pharmacologist", "Toxicologist"]
    },
    "BSc Forensic Chemistry": {
        cutoff: "78%",
        futureScope: ["Forensic Science", "Criminal Investigations", "Toxicology"],
        careers: ["Forensic Scientist", "Crime Scene Analyst", "Toxicologist", "Lab Analyst"]
    },
    "BTech Chemical Engineering": {
        cutoff: "85%",
        futureScope: ["Petrochemicals", "Food Processing", "Renewable Energy"],
        careers: ["Chemical Engineer", "Process Engineer", "Petroleum Engineer", "Environmental Engineer"]
    },
    "BTech Polymer Science & Engineering": {
        cutoff: "80%",
        futureScope: ["Plastics & Polymers", "Textile Industry", "Material Science"],
        careers: ["Polymer Scientist", "Material Engineer", "R&D Scientist", "Production Engineer"]
    },
    "BTech Oil & Paint Technology": {
        cutoff: "78%",
        futureScope: ["Petroleum Industry", "Paint & Coatings", "Adhesive Manufacturing"],
        careers: ["Oil Technologist", "Coating Scientist", "Quality Control Engineer", "Industrial Chemist"]
    },
    "BSc Biology": {
        cutoff: "75%",
        futureScope: ["Biological Research", "Teaching", "Environmental Science"],
        careers: ["Biologist", "Lab Technician", "Environmental Scientist", "Science Educator"]
    },
    "BSc Biotechnology": {
        cutoff: "80%",
        futureScope: ["Genetic Engineering", "Medical Research", "Biopharmaceuticals"],
        careers: ["Biotechnologist", "Geneticist", "Biomedical Scientist", "R&D Scientist"]
    },
    "BSc Microbiology": {
        cutoff: "78%",
        futureScope: ["Pharmaceutical Industry", "Food Safety", "Medical Microbiology"],
        careers: ["Microbiologist", "Quality Control Analyst", "Infectious Disease Researcher", "Industrial Microbiologist"]
    },
    "BSc Botany": {
        cutoff: "75%",
        futureScope: ["Plant Research", "Agriculture", "Horticulture"],
        careers: ["Botanist", "Plant Pathologist", "Agricultural Scientist", "Herbal Scientist"]
    },
    "BSc Genetics": {
        cutoff: "82%",
        futureScope: ["Genetic Counseling", "Biotechnology", "Molecular Biology"],
        careers: ["Geneticist", "Clinical Researcher", "Forensic DNA Analyst", "Biotech Research Scientist"]
    },
    "BSc Zoology": {
        cutoff: "75%",
        futureScope: ["Wildlife Conservation", "Animal Research", "Environmental Science"],
        careers: ["Zoologist", "Wildlife Biologist", "Animal Behaviorist", "Veterinary Assistant"]
    },
    "BSc Food Science & Nutrition": {
        cutoff: "78%",
        futureScope: ["Food Technology", "Dietetics", "Public Health"],
        careers: ["Food Scientist", "Nutritionist", "Dietitian", "Food Safety Analyst"]
    },
    "BSc Forensic Science": {
        cutoff: "80%",
        futureScope: ["Criminal Investigations", "Forensic Labs", "Legal Advisory"],
        careers: ["Forensic Scientist", "Crime Scene Investigator", "Forensic Analyst", "Toxicologist"]
    },
    "BSc Nursing": {
        cutoff: "80%",
        futureScope: ["Hospital Management", "Critical Care", "Community Health"],
        careers: ["Registered Nurse", "Critical Care Nurse", "Medical Researcher", "Hospital Administrator"]
    },
    "MBBS (Bachelor of Medicine & Bachelor of Surgery)": {
        cutoff: "85%",
        futureScope: ["Medical Practice", "Specializations", "Healthcare Administration"],
        careers: ["Doctor", "Surgeon", "Medical Researcher", "Healthcare Consultant"]
    },
    "BDS (Bachelor of Dental Surgery)": {
        cutoff: "85%",
        futureScope: ["Dentistry", "Orthodontics", "Cosmetic Dentistry"],
        careers: ["Dentist", "Orthodontist", "Oral Surgeon", "Dental Hygienist"]
    },
    "BAMS (Ayurvedic Medicine)": {
        cutoff: "80%",
        futureScope: ["Ayurvedic Medicine", "Herbal Drug Research", "Holistic Healing"],
        careers: ["Ayurvedic Doctor", "Herbal Medicine Researcher", "Wellness Consultant", "Health Coach"]
    },
    "BHMS (Homeopathic Medicine)": {
        cutoff: "78%",
        futureScope: ["Homeopathy", "Alternative Medicine", "Public Health"],
        careers: ["Homeopathic Doctor", "Holistic Healer", "Healthcare Advisor", "Therapist"]
    },
    "BVSc (Veterinary Science)": {
        cutoff: "82%",
        futureScope: ["Veterinary Medicine", "Animal Research", "Zoology"],
        careers: ["Veterinarian", "Animal Scientist", "Pet Clinic Owner", "Wildlife Researcher"]
    },
    "BSc Physiotherapy": {
        cutoff: "78%",
        futureScope: ["Physical Rehabilitation", "Sports Therapy", "Healthcare"],
        careers: ["Physiotherapist", "Rehabilitation Specialist", "Sports Therapist", "Pain Management Expert"]
    },
    "BSc Radiology & Imaging Science": {
        cutoff: "80%",
        futureScope: ["Medical Imaging", "Radiation Therapy", "Healthcare"],
        careers: ["Radiologist", "MRI Technician", "X-Ray Technician", "Ultrasound Specialist"]
    },
    "BSc Clinical Research": {
        cutoff: "80%",
        futureScope: ["Pharmaceutical Research", "Clinical Trials", "Medical Studies"],
        careers: ["Clinical Researcher", "Pharmaceutical Scientist", "Medical Data Analyst", "Drug Safety Associate"]
    },
    "BSc Pharmacology": {
        cutoff: "82%",
        futureScope: ["Drug Development", "Toxicology", "Pharmaceutical Industry"],
        careers: ["Pharmacologist", "Toxicologist", "Clinical Research Associate", "Regulatory Affairs Specialist"]
    },
    "BTech Genetic Engineering": {
        cutoff: "85%",
        futureScope: ["DNA Research", "Biomedical Innovations", "Cloning"],
        careers: ["Genetic Engineer", "Biotech Scientist", "Molecular Biologist", "R&D Scientist"]
    },
    "BTech Biomedical Engineering": {
        cutoff: "85%",
        futureScope: ["Medical Device Development", "Healthcare Technology", "Artificial Organs"],
        careers: ["Biomedical Engineer", "Medical Device Designer", "Healthcare IT Specialist", "Biotech Consultant"]
    },
    "BSc Computer Science": {
        cutoff: "75%",
        futureScope: ["Software Development", "IT Support", "Cybersecurity"],
        careers: ["Software Developer", "System Analyst", "IT Consultant", "Technical Support Engineer"]
    },
    "BTech Computer Science": {
        cutoff: "80%",
        futureScope: ["Software Engineering", "Data Science", "Networking"],
        careers: ["Software Engineer", "Network Engineer", "AI Engineer", "System Architect"]
    },
    "BSc AI & ML": {
        cutoff: "80%",
        futureScope: ["Artificial Intelligence", "Machine Learning", "Data Science"],
        careers: ["AI Engineer", "Machine Learning Engineer", "Data Scientist", "AI Researcher"]
    },
    "BTech Software Engineering": {
        cutoff: "82%",
        futureScope: ["Full-Stack Development", "Software Testing", "Mobile App Development"],
        careers: ["Software Developer", "Full-Stack Engineer", "DevOps Engineer", "Mobile App Developer"]
    },
    "BTech Data Science & AI": {
        cutoff: "82%",
        futureScope: ["Data Science", "Predictive Analytics", "AI Solutions"],
        careers: ["Data Scientist", "AI Engineer", "Big Data Analyst", "Machine Learning Specialist"]
    },
    "BTech Cybersecurity": {
        cutoff: "80%",
        futureScope: ["Cyber Threat Analysis", "Ethical Hacking", "Information Security"],
        careers: ["Cybersecurity Analyst", "Ethical Hacker", "Information Security Manager", "Security Consultant"]
    },
    "BTech Cloud Computing": {
        cutoff: "78%",
        futureScope: ["Cloud Infrastructure", "Cloud Security", "DevOps"],
        careers: ["Cloud Engineer", "Cloud Solutions Architect", "Cloud Security Analyst", "DevOps Engineer"]
    },
    "BTech Blockchain Technology": {
        cutoff: "80%",
        futureScope: ["Cryptocurrency", "Decentralized Applications", "Financial Security"],
        careers: ["Blockchain Developer", "Cryptocurrency Analyst", "Smart Contract Developer", "Fintech Consultant"]
    },
    "BTech Internet of Things (IoT)": {
        cutoff: "78%",
        futureScope: ["IoT Solutions", "Embedded Systems", "Smart Devices"],
        careers: ["IoT Developer", "Embedded Systems Engineer", "Automation Engineer", "IoT Security Specialist"]
    },
    "BTech Game Development": {
        cutoff: "78%",
        futureScope: ["Game Design", "Virtual Reality", "3D Animation"],
        careers: ["Game Developer", "VR/AR Developer", "3D Animator", "Game Designer"]
    },
    "BTech Big Data Analytics": {
        cutoff: "82%",
        futureScope: ["Data Engineering", "Predictive Analytics", "AI & ML"],
        careers: ["Data Analyst", "Data Engineer", "BI Developer", "ML Engineer"]
    },
    "BTech Augmented & Virtual Reality (AR/VR)": {
        cutoff: "78%",
        futureScope: ["AR/VR Game Development", "Metaverse", "Immersive Technologies"],
        careers: ["AR Developer", "VR Engineer", "Immersive Experience Designer", "3D Modeler"]
    },
    "BE Computer Science & Engineering (CSE)": {
        cutoff: "80%",
        futureScope: ["Software Development", "AI & ML", "Cybersecurity"],
        careers: ["Software Engineer", "Cloud Engineer", "Data Scientist", "Full-Stack Developer"]
    },
    "BA History": {
        cutoff: "70%",
        futureScope: ["Civil Services", "Academia", "Museology"],
        careers: ["Historian", "Museum Curator", "Archivist", "History Professor", "Researcher"]
    },
    "BA Political Science": {
        cutoff: "72%",
        futureScope: ["Public Administration", "Political Journalism", "International Relations"],
        careers: ["Political Analyst", "Civil Servant (UPSC)", "Policy Advisor", "Diplomat"]
    },
    "BA Ancient History": {
        cutoff: "70%",
        futureScope: ["Archaeology", "Museum Studies", "Academic Research"],
        careers: ["Archaeologist", "Museum Curator", "Historian", "Cultural Heritage Manager"]
    },
    "BA Modern History": {
        cutoff: "72%",
        futureScope: ["Journalism", "Law", "Teaching"],
        careers: ["History Professor", "Political Journalist", "Lawyer", "Archivist"]
    },
    "BA Archaeology": {
        cutoff: "75%",
        futureScope: ["Field Excavation", "Cultural Resource Management", "Heritage Conservation"],
        careers: ["Archaeologist", "Heritage Consultant", "Excavation Specialist", "Museologist"]
    },
    "BA Anthropology & History": {
        cutoff: "72%",
        futureScope: ["Anthropological Research", "Social Work", "Museum Studies"],
        careers: ["Anthropologist", "Social Researcher", "NGO Worker", "Museum Director"]
    },
    "BA International Relations & History": {
        cutoff: "75%",
        futureScope: ["Foreign Policy", "International Organizations", "Diplomacy"],
        careers: ["Diplomat", "Foreign Affairs Analyst", "Embassy Official", "Policy Researcher"]
    },
    "BA Cultural Studies": {
        cutoff: "70%",
        futureScope: ["Media & Communication", "Cultural Policy Making", "Academia"],
        careers: ["Cultural Analyst", "Media Critic", "Museum Director", "Content Writer"]
    },
    "BA Heritage & Museum Studies": {
        cutoff: "75%",
        futureScope: ["Museum Curation", "Heritage Management", "Art Preservation"],
        careers: ["Museum Curator", "Art Conservator", "Heritage Consultant", "Tourism Expert"]
    },
    "BSc Agriculture": {
        cutoff: "75%",
        futureScope: ["Agri-Business Management", "Research & Development", "Farming Technology"],
        careers: ["Agricultural Officer", "Farm Manager", "Agri-Entrepreneur", "Food Safety Officer"]
    },
    "BTech Agricultural Engineering": {
        cutoff: "78%",
        futureScope: ["Agro-Technology Development", "Irrigation Systems", "Farm Machinery"],
        careers: ["Agricultural Engineer", "Irrigation Designer", "Agribusiness Consultant", "Soil Scientist"]
    },
    "BSc Horticulture": {
        cutoff: "70%",
        futureScope: ["Landscaping", "Greenhouse Management", "Crop Improvement"],
        careers: ["Horticulturist", "Floriculturist", "Landscape Designer", "Nursery Manager"]
    },
    "BSc Agronomy": {
        cutoff: "72%",
        futureScope: ["Crop Production", "Soil Science", "Organic Farming"],
        careers: ["Agronomist", "Crop Consultant", "Soil Scientist", "Fertilizer Expert"]
    },
    "BSc Crop Science": {
        cutoff: "73%",
        futureScope: ["Genetic Engineering", "Agronomic Research", "Food Security"],
        careers: ["Plant Breeder", "Agricultural Researcher", "Seed Technologist", "Pest Control Advisor"]
    },
    "BSc Plant Pathology": {
        cutoff: "72%",
        futureScope: ["Disease Control", "Pesticide Development", "Plant Protection"],
        careers: ["Plant Pathologist", "Plant Disease Expert", "Agricultural Consultant", "Research Scientist"]
    },
    "BSc Forestry": {
        cutoff: "70%",
        futureScope: ["Wildlife Conservation", "Environmental Protection", "Timber Industry"],
        careers: ["Forest Officer", "Wildlife Conservationist", "Forest Ranger", "Ecologist"]
    },
    "BSc Animal Husbandry": {
        cutoff: "70%",
        futureScope: ["Dairy & Poultry Farming", "Veterinary Services", "Livestock Breeding"],
        careers: ["Livestock Inspector", "Dairy Farm Manager", "Animal Nutritionist", "Poultry Farm Owner"]
    },
    "BSc Fisheries Science": {
        cutoff: "72%",
        futureScope: ["Aquaculture Management", "Marine Conservation", "Fisheries Economics"],
        careers: ["Fisheries Biologist", "Aquaculture Expert", "Fishery Officer", "Marine Researcher"]
    },
    "BSc Dairy Science": {
        cutoff: "70%",
        futureScope: ["Dairy Technology", "Milk Production & Processing", "Animal Breeding"],
        careers: ["Dairy Technologist", "Milk Processing Specialist", "Quality Control Officer", "Dairy Farm Consultant"]
    },
    "BSc Food Technology": {
        cutoff: "75%",
        futureScope: ["Food Processing", "Quality Assurance", "Nutritional Science"],
        careers: ["Food Scientist", "Quality Assurance Officer", "Food Safety Auditor", "Product Development Manager"]
    },
    "BSc Agricultural Economics": {
        cutoff: "72%",
        futureScope: ["Agri-Business Consulting", "Agricultural Policy Making", "Market Research"],
        careers: ["Agricultural Economist", "Farm Business Consultant", "Commodity Trader", "Policy Analyst"]
    }

};
    



// Function to populate degree list based on selected group
document.getElementById("groupSelect").addEventListener("change", function () {
    const selectedGroup = this.value;
    const degreeList = document.getElementById("degreeList");
    degreeList.innerHTML = "";

    if (selectedGroup && degreesByGroup[selectedGroup]) {
        degreesByGroup[selectedGroup].forEach(degree => {
            let li = document.createElement("li");
            li.textContent = degree;
            li.onclick = () => showDetails(degree);
            degreeList.appendChild(li);
        });
    }
});

// Function to show degree details
function showDetails(degree) {
    const detailsBox = document.getElementById("degreeDetails");
    const title = document.getElementById("degreeTitle");
    const cutoff = document.getElementById("degreeCutoff");
    const scopeList = document.getElementById("degreeScope");
    const careerList = document.getElementById("degreeCareers");

    if (degreeDetails[degree]) {
        title.textContent = degree;
        cutoff.textContent = degreeDetails[degree].cutoff;
        
        scopeList.innerHTML = "";
        degreeDetails[degree].futureScope.forEach(scope => {
            let li = document.createElement("li");
            li.textContent = scope;
            scopeList.appendChild(li);
        });

        careerList.innerHTML = "";
        degreeDetails[degree].careers.forEach(career => {
            let li = document.createElement("li");
            li.textContent = career;
            careerList.appendChild(li);
        });

        detailsBox.style.display = "block";
    }
}





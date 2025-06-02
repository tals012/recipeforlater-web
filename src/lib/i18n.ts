export type Language = 'en' | 'he';

export const translations = {
  en: {
    // Navigation & Common
    title: 'RecipeForLater',
    description: 'Save recipes for later, organized perfectly',
    
    // Homepage
    recipeDemo: 'Recipe Demo',
    recipeDemoDesc: 'Try out our recipe deep linking feature',
    magicLinkDemo: 'Magic Link Demo',
    magicLinkDemoDesc: 'Try our magic link authentication',
    
    // Footer
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    allRightsReserved: 'All rights reserved',
    
    // Auth
    connectingToGoogle: 'Connecting to Google...',
    pleaseWaitRedirecting: 'Please wait, redirecting you back to the app',
    backToAppError: 'Back to App (Error)',
    backToApp: 'Back to App',
    loading: 'Loading...',
    processingMagicLink: 'Processing magic link...',
    redirectingToApp: 'Redirecting to app...',
    invalidMagicLink: 'Invalid magic link',
    
    // Recipe Pages
    loadingRecipe: 'Loading recipe...',
    recipeNotFound: 'Recipe not found',
    redirectingToAppRecipe: 'Redirecting to RecipeForLater app...',
    openInApp: 'Open in RecipeForLater app',
    dontHaveApp: "Don't have the app yet?",
    appStore: 'App Store',
    googlePlay: 'Google Play',
    
    // Privacy Policy
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated',
      introduction: {
        title: '1. Introduction',
        content: 'Welcome to the "Recipe for Later" app. We are committed to protecting your privacy and handling your personal information responsibly. This privacy policy explains how we collect, use and protect your information when you use our application.'
      },
      dataCollection: {
        title: '2. Information Collection',
        providedInfo: '2.1 Information you provide',
        providedList: [
          'Email address (for registration and login)',
          'Username (optional)',
          'Recipes you save and create',
          'Dietary preferences and allergies',
          'Notes and ratings for recipes'
        ],
        automaticInfo: '2.2 Automatically collected information',
        automaticList: [
          'App usage information (recipes viewed, usage times)',
          'Technical information (device type, operating system, app version)',
          'IP address and device identification',
          'Cookies and similar identifiers'
        ]
      },
      dataUse: {
        title: '3. Use of Information',
        content: 'We use your information for the following purposes:',
        list: [
          'Providing app services and managing your account',
          'Saving and syncing your recipes across devices',
          'Improving app content and personalized recommendations',
          'Sending notifications and updates (with your consent)',
          'Preventing misuse and securing the service',
          'Research and development to improve the service',
          'Compliance with legal requirements'
        ]
      },
      dataSharing: {
        title: '4. Information Sharing',
        content: 'We do not sell or share your personal information with third parties, except in the following cases:',
        list: [
          'With your explicit consent',
          'With authorized service providers acting on our behalf (hosting, analytics)',
          'When required by law or court order',
          'To protect our rights, property or safety or that of others',
          'In case of merger, acquisition or asset sale'
        ]
      },
      dataSecurity: {
        title: '5. Data Security',
        content: 'We employ advanced security measures to protect your information:',
        list: [
          'Data encryption in transit and at rest',
          'Access restriction to authorized personnel only',
          'Ongoing security monitoring and testing',
          'Regular data backups',
          'Regular security updates'
        ]
      },
      userRights: {
        title: '6. Your Rights',
        content: 'You have the following rights regarding your personal information:',
        list: [
          'Access to personal information stored about you',
          'Correction or updating of incorrect information',
          'Deletion of your information ("right to be forgotten")',
          'Restriction of processing your information',
          'Data portability - receiving a copy of your information',
          'Withdrawal of consent for information processing',
          'Filing a complaint with the privacy protection authority'
        ]
      },
      dataRetention: {
        title: '7. Data Retention',
        content: 'We retain your personal information as long as your account is active, or as required to provide services. After account deletion, we will delete the information within 30 days, except for information required to be kept by law.'
      },
      thirdPartyServices: {
        title: '8. Third Party Services',
        content: 'Our app may contain links or integrations with third party services:',
        list: [
          'Google Analytics for usage analysis',
          'Google OAuth for login',
          'Cloud hosting services',
          'Payment providers (if applicable)'
        ],
        note: 'These services are subject to their own privacy policies, and we recommend reading them.'
      },
      minors: {
        title: '9. Minor Users',
        content: 'Our service is intended for users over 13 years old. We do not knowingly collect personal information from children under 13. If we learn that we have collected such information, we will delete it immediately.'
      },
      policyChanges: {
        title: '10. Policy Changes',
        content: 'We may update this privacy policy from time to time. Material changes will be communicated through the app or email. Continued use after changes constitutes acceptance of the updated policy.'
      },
      contact: {
        title: '11. Contact',
        content: 'For questions or requests regarding the privacy policy or handling of your personal information, you can contact us:',
        email: 'Email: privacy@recipeforlater.com',
        address: 'Address: Tel Aviv, Israel'
      },
      language: {
        title: '12. Language Validity',
        content: 'This privacy policy was written in English. In case of conflict between the English version and versions in other languages, the English version will prevail.'
      }
    },
    
    // Terms of Service
    terms: {
      title: 'Terms of Service',
      lastUpdated: 'Last updated',
      acceptance: {
        title: '1. Acceptance of Terms',
        content: 'Welcome to the "Recipe for Later" app. Use of our app is subject to your agreement to these terms of service. If you do not agree to the terms, please refrain from using the app. Continued use constitutes full agreement to these terms.'
      },
      serviceDescription: {
        title: '2. Service Description',
        content: '"Recipe for Later" is an app for saving, organizing and sharing recipes. The service includes:',
        list: [
          'Saving recipes from various websites',
          'Creating original recipes',
          'Organizing recipes in categories and tags',
          'Sharing recipes with other users',
          'Recipe search and filtering',
          'Personalized recommendations',
          'Cross-device synchronization'
        ]
      },
      registration: {
        title: '3. Registration and User Account',
        eligibility: '3.1 Registration Eligibility',
        eligibilityContent: 'The service is intended for users over 13 years old. Users under 18 require parental or guardian consent.',
        responsibility: '3.2 User Responsibility',
        responsibilityList: [
          'Providing accurate and current information during registration',
          'Maintaining confidentiality of login credentials',
          'Immediate notification of unauthorized account use',
          'Full responsibility for all account activity'
        ]
      },
      usage: {
        title: '4. Permitted and Prohibited Use',
        permitted: '4.1 Permitted Use',
        permittedList: [
          'Saving and organizing recipes for personal use',
          'Creating original recipes and sharing them',
          'Using app features as intended',
          'Sharing recipes in private groups'
        ],
        prohibited: '4.2 Prohibited Use',
        prohibitedList: [
          'Violation of copyright or intellectual property rights',
          'Uploading offensive, racist or inappropriate content',
          'Attempting to hack or compromise system security',
          'Using automated systems for content scraping',
          'Distributing viruses or malicious software',
          'Harassing other users',
          'Commercial use without explicit permission',
          'Creating fake or multiple accounts'
        ]
      },
      content: {
        title: '5. Content and Recipes',
        ownership: '5.1 Content Ownership',
        ownershipContent: 'You retain ownership of original recipes you create. For recipes saved from other sites, ownership remains with the original creators.',
        license: '5.2 Usage License',
        licenseContent: 'By uploading content to the app, you grant us a non-exclusive license to use, display and distribute the content within the service.',
        responsibility: '5.3 Content Responsibility',
        responsibilityContent: 'You are responsible for ensuring that content you upload does not violate third party rights and complies with legal requirements and terms.'
      },
      privacy: {
        title: '6. Privacy',
        content: 'Use of your personal information is subject to our privacy policy, which forms an integral part of these terms of service. We recommend reading the privacy policy carefully.'
      },
      availability: {
        title: '7. Service Availability',
        content: 'We strive to provide continuous and stable service, but do not guarantee 100% availability. The service may be unavailable from time to time due to:',
        list: [
          'Planned or emergency maintenance',
          'Technical failures',
          'Force majeure or circumstances beyond our control',
          'System updates'
        ]
      },
      liability: {
        title: '8. Limitation of Liability',
        content: 'The service is provided "AS IS" and we make no warranties regarding:',
        list: [
          'Accuracy or completeness of information in the app',
          'Fitness for specific purposes',
          'Absence of errors or viruses',
          'Absolute security of information'
        ],
        limitation: 'Our liability is limited to the amount you paid for the service in the last 12 months, and in any case will not exceed $1,000.'
      },
      termination: {
        title: '9. Terms Violation and Account Closure',
        content: 'We may close or suspend accounts in the following cases:',
        list: [
          'Violation of terms of service',
          'Illegal use of the app',
          'Harm to other users or the system',
          'Extended inactivity (over two years)'
        ],
        dataRetrieval: 'In case of account closure, you may download your data within 30 days of notification.'
      },
      changes: {
        title: '10. Terms Changes',
        content: 'We may update these terms of service from time to time. Material changes will be communicated through the app or email at least 30 days in advance. Continued use after changes constitutes agreement to the new terms.'
      },
      serviceEnd: {
        title: '11. Service Termination',
        content: 'We may discontinue the service with 90 days advance notice. In such case, we will allow you to download your data for a reasonable period after service termination.'
      },
      law: {
        title: '12. Applicable Law and Dispute Resolution',
        content: 'These terms of service are subject to the laws of the State of Israel. Any dispute will be adjudicated in the competent courts in Israel.',
        mediation: 'Before court proceedings, we would be happy to try to resolve disputes through direct negotiation or mediation.'
      },
      general: {
        title: '13. General Provisions',
        severability: '13.1 Severability of Provisions',
        severabilityContent: 'If any provision in the terms is found to be illegal or unenforceable, the remaining provisions will remain in effect.',
        waiver: '13.2 Waiver of Rights',
        waiverContent: 'Failure to enforce a right does not constitute a waiver of it for the future.',
        assignment: '13.3 Assignment of Rights',
        assignmentContent: 'You may not transfer your rights and obligations under these terms without our written consent.'
      },
      contact: {
        title: '14. Contact',
        content: 'For questions or clarifications regarding the terms of service, you can contact us:',
        email: 'Email: support@recipeforlater.com',
        address: 'Address: Tel Aviv, Israel'
      },
      language: {
        title: '15. Language Validity',
        content: 'These terms of service were written in English. In case of conflict between the English version and versions in other languages, the English version will prevail.'
      }
    }
  },
  
  he: {
    // Navigation & Common
    title: 'Recipe for Later',
    description: 'שמור מתכונים למועד מאוחר יותר, מאורגן בצורה מושלמת',
    
    // Homepage
    recipeDemo: 'דמו מתכונים',
    recipeDemoDesc: 'נסה את תכונת הקישורים העמוקים למתכונים',
    magicLinkDemo: 'דמו קישור קסם',
    magicLinkDemoDesc: 'נסה את האימות באמצעות קישור קסם',
    
    // Footer
    privacyPolicy: 'מדיניות פרטיות',
    termsOfService: 'תנאי שימוש',
    allRightsReserved: 'כל הזכויות שמורות',
    
    // Auth
    connectingToGoogle: 'מתחבר לחשבון Google...',
    pleaseWaitRedirecting: 'אנא המתן, אנחנו מעבירים אותך חזרה לאפליקציה',
    backToAppError: 'חזרה לאפליקציה (שגיאה)',
    backToApp: 'חזרה לאפליקציה',
    loading: 'טוען...',
    processingMagicLink: 'מעבד קישור קסם...',
    redirectingToApp: 'מעביר לאפליקציה...',
    invalidMagicLink: 'קישור קסם לא תקין',
    
    // Recipe Pages
    loadingRecipe: 'טוען מתכון...',
    recipeNotFound: 'מתכון לא נמצא',
    redirectingToAppRecipe: 'מעביר אותך לאפליקציית RecipeForLater...',
    openInApp: 'פתח באפליקציית RecipeForLater',
    dontHaveApp: 'עדיין אין לך את האפליקציה?',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    
    // Privacy Policy
    privacy: {
      title: 'מדיניות פרטיות',
      lastUpdated: 'עדכון אחרון',
      introduction: {
        title: '1. מבוא',
        content: 'ברוכים הבאים לאפליקציית "Recipe for Later". אנו מתחייבים להגן על הפרטיות שלכם ולטפל במידע האישי שלכם באחריות. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע שלכם כאשר אתם משתמשים באפליקציה שלנו.'
      },
      dataCollection: {
        title: '2. איסוף מידע',
        providedInfo: '2.1 מידע שאתם מספקים',
        providedList: [
          'כתובת אימייל (לצורך הרשמה והתחברות)',
          'שם משתמש (אופציונלי)',
          'מתכונים שאתם שומרים ויוצרים',
          'העדפות תזונתיות ואלרגיות',
          'הערות ודירוגים למתכונים'
        ],
        automaticInfo: '2.2 מידע שנאסף אוטומטית',
        automaticList: [
          'מידע שימוש באפליקציה (מתכונים שנצפו, זמני שימוש)',
          'מידע טכני (סוג מכשיר, מערכת הפעלה, גרסת אפליקציה)',
          'כתובת IP וזיהוי מכשיר',
          'עוגיות (Cookies) ומזהים דומים'
        ]
      },
      dataUse: {
        title: '3. שימוש במידע',
        content: 'אנו משתמשים במידע שלכם למטרות הבאות:',
        list: [
          'מתן שירותי האפליקציה וניהול החשבון שלכם',
          'שמירה וסנכרון המתכונים שלכם בין מכשירים',
          'שיפור תוכן האפליקציה והמלצות מותאמות אישית',
          'שליחת התראות ועדכונים (בהסכמתכם)',
          'מניעת שימוש לרעה ואבטחת השירות',
          'מחקר ופיתוח לשיפור השירות',
          'עמידה בדרישות חוקיות'
        ]
      },
      dataSharing: {
        title: '4. שיתוף מידע',
        content: 'אנו לא מוכרים או משתפים את המידע האישי שלכם עם צדדים שלישיים, למעט במקרים הבאים:',
        list: [
          'בהסכמתכם המפורשת',
          'עם ספקי שירות מורשים הפועלים בשמנו (אירוח, אנליטיקה)',
          'כאשר נדרש על פי חוק או צו בית משפט',
          'להגנה על הזכויות, הרכוש או הבטיחות שלנו או של אחרים',
          'במקרה של מיזוג, רכישה או מכירת נכסים'
        ]
      },
      dataSecurity: {
        title: '5. אבטחת מידע',
        content: 'אנו נוקטים באמצעי אבטחה מתקדמים להגנה על המידע שלכם:',
        list: [
          'הצפנת נתונים בעת העברה ובמנוחה',
          'הגבלת גישה למידע לצוות מורשה בלבד',
          'ניטור ובדיקות אבטחה שוטפות',
          'גיבוי נתונים סדיר',
          'עדכוני אבטחה קבועים'
        ]
      },
      userRights: {
        title: '6. הזכויות שלכם',
        content: 'יש לכם הזכויות הבאות לגבי המידע האישי שלכם:',
        list: [
          'עיון במידע האישי השמור עליכם',
          'תיקון או עדכון מידע לא נכון',
          'מחיקת המידע שלכם ("הזכות להישכח")',
          'הגבלת עיבוד המידע שלכם',
          'ניידות נתונים - קבלת עותק של המידע שלכם',
          'ביטול הסכמה לעיבוד מידע',
          'הגשת תלונה לרשות הגנת הפרטיות'
        ]
      },
      dataRetention: {
        title: '7. שמירת מידע',
        content: 'אנו שומרים את המידע האישי שלכם כל עוד החשבון שלכם פעיל, או כפי שנדרש למתן השירותים. לאחר מחיקת החשבון, נמחק את המידע תוך 30 יום, למעט מידע שנדרש לשמור על פי חוק.'
      },
      thirdPartyServices: {
        title: '8. שירותי צד שלישי',
        content: 'האפליקציה שלנו עשויה להכיל קישורים או שילובים עם שירותי צד שלישי:',
        list: [
          'Google Analytics לניתוח שימוש',
          'Google OAuth להתחברות',
          'שירותי אירוח ענן',
          'ספקי תשלומים (אם רלוונטי)'
        ],
        note: 'שירותים אלו כפופים למדיניות הפרטיות שלהם, ואנו ממליצים לקרוא אותן.'
      },
      minors: {
        title: '9. משתמשים קטינים',
        content: 'השירות שלנו מיועד למשתמשים מעל גיל 13. איננו אוספים במכוון מידע אישי מילדים מתחת לגיל 13. אם נודע לנו שאספנו מידע כזה, נמחק אותו מיד.'
      },
      policyChanges: {
        title: '10. שינויים במדיניות',
        content: 'אנו עשויים לעדכן את מדיניות הפרטיות מעת לעת. שינויים מהותיים יובאו לידיעתכם באמצעות האפליקציה או בדוא"ל. המשך השימוש לאחר השינויים מהווה הסכמה למדיניות המעודכנת.'
      },
      contact: {
        title: '11. יצירת קשר',
        content: 'לשאלות או בקשות בנוגע למדיניות הפרטיות או לטיפול במידע האישי שלכם, ניתן לפנות אלינו:',
        email: 'אימייל: privacy@recipeforlater.com',
        address: 'כתובת: תל אביב, ישראל'
      },
      language: {
        title: '12. תקינות השפה',
        content: 'מדיניות פרטיות זו נכתבה בעברית. במקרה של סתירה בין הגרסה העברית לגרסאות בשפות אחרות, הגרסה העברית תגבר.'
      }
    },
    
    // Terms of Service (Hebrew translations)
    terms: {
      title: 'תנאי שימוש',
      lastUpdated: 'עדכון אחרון',
      acceptance: {
        title: '1. קבלת התנאים',
        content: 'ברוכים הבאים לאפליקציית "Recipe for Later". השימוש באפליקציה שלנו מותנה בהסכמתכם לתנאי שימוש אלה. אם אינכם מסכימים לתנאים, אנא הימנעו משימוש באפליקציה. המשך השימוש מהווה הסכמה מלאה לתנאים אלה.'
      },
      serviceDescription: {
        title: '2. תיאור השירות',
        content: '"Recipe for Later" היא אפליקציה לשמירה, ארגון ושיתוף מתכונים. השירות כולל:',
        list: [
          'שמירת מתכונים מאתרי אינטרנט שונים',
          'יצירת מתכונים מקוריים',
          'ארגון מתכונים בקטגוריות וכותרות',
          'שיתוף מתכונים עם משתמשים אחרים',
          'חיפוש וסינון מתכונים',
          'המלצות מותאמות אישית',
          'סנכרון בין מכשירים'
        ]
      },
      registration: {
        title: '3. הרשמה וחשבון משתמש',
        eligibility: '3.1 זכאות להרשמה',
        eligibilityContent: 'השירות מיועד למשתמשים מעל גיל 13. משתמשים מתחת לגיל 18 זקוקים להסכמת הורה או אפוטרופוס.',
        responsibility: '3.2 אחריות המשתמש',
        responsibilityList: [
          'מתן מידע נכון ועדכני בעת ההרשמה',
          'שמירה על סודיות פרטי ההתחברות',
          'הודעה מיידית על שימוש לא מורשה בחשבון',
          'אחריות מלאה לכל הפעילות בחשבון'
        ]
      },
      usage: {
        title: '4. שימוש מותר ואסור',
        permitted: '4.1 שימוש מותר',
        permittedList: [
          'שמירה וארגון מתכונים לשימוש אישי',
          'יצירת מתכונים מקוריים ושיתופם',
          'שימוש בתכונות האפליקציה בהתאם ליעודן',
          'שיתוף מתכונים בקבוצות פרטיות'
        ],
        prohibited: '4.2 שימוש אסור',
        prohibitedList: [
          'הפרת זכויות יוצרים או קניין רוחני',
          'העלאת תוכן פוגעני, גזעני או לא ראוי',
          'ניסיון פריצה או פגיעה באבטחת המערכת',
          'שימוש במערכות אוטומטיות לקצירת תוכן',
          'הפצת וירוסים או תוכנות זדוניות',
          'הטרדת משתמשים אחרים',
          'שימוש מסחרי ללא אישור מפורש',
          'יצירת חשבונות מזויפים או מרובים'
        ]
      },
      content: {
        title: '5. תוכן ומתכונים',
        ownership: '5.1 בעלות על תוכן',
        ownershipContent: 'אתם שומרים על הבעלות במתכונים המקוריים שאתם יוצרים. לגבי מתכונים ששמרתם מאתרים אחרים, הבעלות נשארת אצל היוצרים המקוריים.',
        license: '5.2 רישיון שימוש',
        licenseContent: 'על ידי העלאת תוכן לאפליקציה, אתם מעניקים לנו רישיון לא בלעדי להשתמש, להציג ולהפיץ את התוכן במסגרת השירות.',
        responsibility: '5.3 אחריות לתוכן',
        responsibilityContent: 'אתם אחראים לוודא שהתוכן שאתם מעלים אינו מפר זכויות צד שלישי ועומד בדרישות החוק והתנאים.'
      },
      privacy: {
        title: '6. פרטיות',
        content: 'השימוש במידע האישי שלכם כפוף למדיניות הפרטיות שלנו, המהווה חלק בלתי נפרד מתנאי שימוש אלה. אנו ממליצים לקרוא את מדיניות הפרטיות בקפידה.'
      },
      availability: {
        title: '7. זמינות השירות',
        content: 'אנו שואפים לספק שירות רציף ויציב, אך איננו מתחייבים לזמינות של 100%. השירות עשוי להיות לא זמין מעת לעת בשל:',
        list: [
          'תחזוקה מתוכננת או חירום',
          'תקלות טכניות',
          'כוח עליון או נסיבות מחוץ לשליטתנו',
          'עדכוני מערכת'
        ]
      },
      liability: {
        title: '8. הגבלת אחריות',
        content: 'השירות ניתן "כמו שהוא" (AS IS) ואיננו מתחייבים לגבי:',
        list: [
          'דיוק או שלמות המידע באפליקציה',
          'התאמה למטרות ספציפיות',
          'היעדר תקלות או וירוסים',
          'אבטחה מוחלטת של המידע'
        ],
        limitation: 'האחריות שלנו מוגבלת לסכום ששילמתם עבור השירות ב-12 החודשים האחרונים, ובכל מקרה לא תעלה על 1,000 ש"ח.'
      },
      termination: {
        title: '9. הפרת תנאים וסגירת חשבון',
        content: 'אנו רשאים לסגור או להשעות חשבון במקרים הבאים:',
        list: [
          'הפרת תנאי השימוש',
          'שימוש בלתי חוקי באפליקציה',
          'פגיעה במשתמשים אחרים או במערכת',
          'חוסר פעילות ממושכת (מעל שנתיים)'
        ],
        dataRetrieval: 'במקרה של סגירת חשבון, תוכלו להוריד את המידע שלכם תוך 30 יום מההודעה.'
      },
      changes: {
        title: '10. שינוי תנאים',
        content: 'אנו רשאים לעדכן את תנאי השימוש מעת לעת. שינויים מהותיים יובאו לידיעתכם באמצעות האפליקציה או בדוא"ל לפחות 30 יום מראש. המשך השימוש לאחר השינויים מהווה הסכמה לתנאים החדשים.'
      },
      serviceEnd: {
        title: '11. סיום השירות',
        content: 'אנו רשאים להפסיק את השירות בהודעה מוקדמת של 90 יום. במקרה כזה, נאפשר לכם להוריד את המידע שלכם במשך תקופה סבירה לאחר הפסקת השירות.'
      },
      law: {
        title: '12. דין חל ויישוב סכסוכים',
        content: 'תנאי שימוש אלה כפופים לדיני מדינת ישראל. כל סכסוך יידון בבתי המשפט המוסמכים בישראל.',
        mediation: 'טרם פניה לבית המשפט, נשמח לנסות ליישב סכסוכים באמצעות משא ומתן ישיר או גישור.'
      },
      general: {
        title: '13. הוראות כלליות',
        severability: '13.1 עצמאות הוראות',
        severabilityContent: 'אם הוראה כלשהי בתנאים תימצא בלתי חוקית או בלתי אכיפה, שאר ההוראות יישארו בתוקף.',
        waiver: '13.2 ויתור על זכויות',
        waiverContent: 'הימנעות מאכיפת זכות אינה מהווה ויתור עליה לעתיד.',
        assignment: '13.3 העברת זכויות',
        assignmentContent: 'אינכם רשאים להעביר את הזכויות והחובות שלכם לפי תנאים אלה ללא הסכמתנו בכתב.'
      },
      contact: {
        title: '14. יצירת קשר',
        content: 'לשאלות או הבהרות בנוגע לתנאי השימוש, ניתן לפנות אלינו:',
        email: 'אימייל: support@recipeforlater.com',
        address: 'כתובת: תל אביב, ישראל'
      },
      language: {
        title: '15. תקינות השפה',
        content: 'תנאי שימוש אלה נכתבו בעברית. במקרה של סתירה בין הגרסה העברית לגרסאות בשפות אחרות, הגרסה העברית תגבר.'
      }
    }
  }
};

export const getTranslation = (language: Language, key: string): string => {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) {
      // Fallback to English if Hebrew translation is missing
      value = translations.en;
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) break;
      }
      break;
    }
  }
  
  return value || key;
}; 
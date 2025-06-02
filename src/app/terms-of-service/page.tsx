export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        תנאי שימוש
                    </h1>

                    <div className="prose prose-lg max-w-none text-right" dir="rtl">
                        <p className="text-gray-600 mb-6">
                            עדכון אחרון: {new Date().toLocaleDateString('he-IL')}
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. קבלת התנאים</h2>
                            <p className="text-gray-700 leading-relaxed">
                                ברוכים הבאים לאפליקציית "Recipe for Later". השימוש באפליקציה שלנו מותנה בהסכמתכם לתנאי שימוש אלה.
                                אם אינכם מסכימים לתנאים, אנא הימנעו משימוש באפליקציה. המשך השימוש מהווה הסכמה מלאה לתנאים אלה.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. תיאור השירות</h2>
                            <p className="text-gray-700 mb-4">
                                "Recipe for Later" היא אפליקציה לשמירה, ארגון ושיתוף מתכונים. השירות כולל:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>שמירת מתכונים מאתרי אינטרנט שונים</li>
                                <li>יצירת מתכונים מקוריים</li>
                                <li>ארגון מתכונים בקטגוריות וכותרות</li>
                                <li>שיתוף מתכונים עם משתמשים אחרים</li>
                                <li>חיפוש וסינון מתכונים</li>
                                <li>המלצות מותאמות אישית</li>
                                <li>סנכרון בין מכשירים</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. הרשמה וחשבון משתמש</h2>
                            <h3 className="text-xl font-medium text-gray-800 mb-2">3.1 זכאות להרשמה</h3>
                            <p className="text-gray-700 mb-4">
                                השירות מיועד למשתמשים מעל גיל 13. משתמשים מתחת לגיל 18 זקוקים להסכמת הורה או אפוטרופוס.
                            </p>

                            <h3 className="text-xl font-medium text-gray-800 mb-2">3.2 אחריות המשתמש</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>מתן מידע נכון ועדכני בעת ההרשמה</li>
                                <li>שמירה על סודיות פרטי ההתחברות</li>
                                <li>הודעה מיידית על שימוש לא מורשה בחשבון</li>
                                <li>אחריות מלאה לכל הפעילות בחשבון</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. שימוש מותר ואסור</h2>
                            <h3 className="text-xl font-medium text-gray-800 mb-2">4.1 שימוש מותר</h3>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li>שמירה וארגון מתכונים לשימוש אישי</li>
                                <li>יצירת מתכונים מקוריים ושיתופם</li>
                                <li>שימוש בתכונות האפליקציה בהתאם ליעודן</li>
                                <li>שיתוף מתכונים בקבוצות פרטיות</li>
                            </ul>

                            <h3 className="text-xl font-medium text-gray-800 mb-2">4.2 שימוש אסור</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>הפרת זכויות יוצרים או קניין רוחני</li>
                                <li>העלאת תוכן פוגעני, גזעני או לא ראוי</li>
                                <li>ניסיון פריצה או פגיעה באבטחת המערכת</li>
                                <li>שימוש במערכות אוטומטיות לקצירת תוכן</li>
                                <li>הפצת וירוסים או תוכנות זדוניות</li>
                                <li>הטרדת משתמשים אחרים</li>
                                <li>שימוש מסחרי ללא אישור מפורש</li>
                                <li>יצירת חשבונות מזויפים או מרובים</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. תוכן ומתכונים</h2>
                            <h3 className="text-xl font-medium text-gray-800 mb-2">5.1 בעלות על תוכן</h3>
                            <p className="text-gray-700 mb-4">
                                אתם שומרים על הבעלות במתכונים המקוריים שאתם יוצרים. לגבי מתכונים ששמרתם מאתרים אחרים,
                                הבעלות נשארת אצל היוצרים המקוריים.
                            </p>

                            <h3 className="text-xl font-medium text-gray-800 mb-2">5.2 רישיון שימוש</h3>
                            <p className="text-gray-700 mb-4">
                                על ידי העלאת תוכן לאפליקציה, אתם מעניקים לנו רישיון לא בלעדי להשתמש, להציג ולהפיץ
                                את התוכן במסגרת השירות.
                            </p>

                            <h3 className="text-xl font-medium text-gray-800 mb-2">5.3 אחריות לתוכן</h3>
                            <p className="text-gray-700">
                                אתם אחראים לוודא שהתוכן שאתם מעלים אינו מפר זכויות צד שלישי ועומד בדרישות החוק והתנאים.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. פרטיות</h2>
                            <p className="text-gray-700">
                                השימוש במידע האישי שלכם כפוף למדיניות הפרטיות שלנו, המהווה חלק בלתי נפרד מתנאי שימוש אלה.
                                אנו ממליצים לקרוא את מדיניות הפרטיות בקפידה.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. זמינות השירות</h2>
                            <p className="text-gray-700 mb-4">
                                אנו שואפים לספק שירות רציף ויציב, אך איננו מתחייבים לזמינות של 100%. השירות עשוי להיות
                                לא זמין מעת לעת בשל:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>תחזוקה מתוכננת או חירום</li>
                                <li>תקלות טכניות</li>
                                <li>כוח עליון או נסיבות מחוץ לשליטתנו</li>
                                <li>עדכוני מערכת</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. הגבלת אחריות</h2>
                            <p className="text-gray-700 mb-4">
                                השירות ניתן "כמו שהוא" (AS IS) ואיננו מתחייבים לגבי:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>דיוק או שלמות המידע באפליקציה</li>
                                <li>התאמה למטרות ספציפיות</li>
                                <li>היעדר תקלות או וירוסים</li>
                                <li>אבטחה מוחלטת של המידע</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                האחריות שלנו מוגבלת לסכום ששילמתם עבור השירות ב-12 החודשים האחרונים, ובכל מקרה לא תעלה על 1,000 ש"ח.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. הפרת תנאים וסגירת חשבון</h2>
                            <p className="text-gray-700 mb-4">
                                אנו רשאים לסגור או להשעות חשבון במקרים הבאים:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>הפרת תנאי השימוש</li>
                                <li>שימוש בלתי חוקי באפליקציה</li>
                                <li>פגיעה במשתמשים אחרים או במערכת</li>
                                <li>חוסר פעילות ממושכת (מעל שנתיים)</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                במקרה של סגירת חשבון, תוכלו להוריד את המידע שלכם תוך 30 יום מההודעה.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. שינוי תנאים</h2>
                            <p className="text-gray-700">
                                אנו רשאים לעדכן את תנאי השימוש מעת לעת. שינויים מהותיים יובאו לידיעתכם באמצעות האפליקציה
                                או בדוא"ל לפחות 30 יום מראש. המשך השימוש לאחר השינויים מהווה הסכמה לתנאים החדשים.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. סיום השירות</h2>
                            <p className="text-gray-700">
                                אנו רשאים להפסיק את השירות בהודעה מוקדמת של 90 יום. במקרה כזה, נאפשר לכם להוריד את
                                המידע שלכם במשך תקופה סבירה לאחר הפסקת השירות.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. דין חל ויישוב סכסוכים</h2>
                            <p className="text-gray-700 mb-4">
                                תנאי שימוש אלה כפופים לדיני מדינת ישראל. כל סכסוך יידון בבתי המשפט המוסמכים בישראל.
                            </p>
                            <p className="text-gray-700">
                                טרם פניה לבית המשפט, נשמח לנסות ליישב סכסוכים באמצעות משא ומתן ישיר או גישור.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. הוראות כלליות</h2>
                            <h3 className="text-xl font-medium text-gray-800 mb-2">13.1 עצמאות הוראות</h3>
                            <p className="text-gray-700 mb-4">
                                אם הוראה כלשהי בתנאים תימצא בלתי חוקית או בלתי אכיפה, שאר ההוראות יישארו בתוקף.
                            </p>

                            <h3 className="text-xl font-medium text-gray-800 mb-2">13.2 ויתור על זכויות</h3>
                            <p className="text-gray-700 mb-4">
                                הימנעות מאכיפת זכות אינה מהווה ויתור עליה לעתיד.
                            </p>

                            <h3 className="text-xl font-medium text-gray-800 mb-2">13.3 העברת זכויות</h3>
                            <p className="text-gray-700">
                                אינכם רשאים להעביר את הזכויות והחובות שלכם לפי תנאים אלה ללא הסכמתנו בכתב.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">14. יצירת קשר</h2>
                            <p className="text-gray-700 mb-4">
                                לשאלות או הבהרות בנוגע לתנאי השימוש, ניתן לפנות אלינו:
                            </p>
                            <ul className="list-none text-gray-700 space-y-2">
                                <li><strong>אימייל:</strong> support@recipeforlater.com</li>
                                <li><strong>כתובת:</strong> תל אביב, ישראל</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">15. תקינות השפה</h2>
                            <p className="text-gray-700">
                                תנאי שימוש אלה נכתבו בעברית. במקרה של סתירה בין הגרסה העברית לגרסאות בשפות אחרות,
                                הגרסה העברית תגבר.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
} 
export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        מדיניות פרטיות
                    </h1>

                    <div className="prose prose-lg max-w-none text-right" dir="rtl">
                        <p className="text-gray-600 mb-6">
                            עדכון אחרון: {new Date().toLocaleDateString('he-IL')}
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. מבוא</h2>
                            <p className="text-gray-700 leading-relaxed">
                                ברוכים הבאים לאפליקציית "Recipe for Later". אנו מתחייבים להגן על הפרטיות שלכם ולטפל במידע האישי שלכם באחריות.
                                מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע שלכם כאשר אתם משתמשים באפליקציה שלנו.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. איסוף מידע</h2>
                            <h3 className="text-xl font-medium text-gray-800 mb-2">2.1 מידע שאתם מספקים</h3>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li>כתובת אימייל (לצורך הרשמה והתחברות)</li>
                                <li>שם משתמש (אופציונלי)</li>
                                <li>מתכונים שאתם שומרים ויוצרים</li>
                                <li>העדפות תזונתיות ואלרגיות</li>
                                <li>הערות ודירוגים למתכונים</li>
                            </ul>

                            <h3 className="text-xl font-medium text-gray-800 mb-2">2.2 מידע שנאסף אוטומטית</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>מידע שימוש באפליקציה (מתכונים שנצפו, זמני שימוש)</li>
                                <li>מידע טכני (סוג מכשיר, מערכת הפעלה, גרסת אפליקציה)</li>
                                <li>כתובת IP וזיהוי מכשיר</li>
                                <li>עוגיות (Cookies) ומזהים דומים</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. שימוש במידע</h2>
                            <p className="text-gray-700 mb-4">אנו משתמשים במידע שלכם למטרות הבאות:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>מתן שירותי האפליקציה וניהול החשבון שלכם</li>
                                <li>שמירה וסנכרון המתכונים שלכם בין מכשירים</li>
                                <li>שיפור תוכן האפליקציה והמלצות מותאמות אישית</li>
                                <li>שליחת התראות ועדכונים (בהסכמתכם)</li>
                                <li>מניעת שימוש לרעה ואבטחת השירות</li>
                                <li>מחקר ופיתוח לשיפור השירות</li>
                                <li>עמידה בדרישות חוקיות</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. שיתוף מידע</h2>
                            <p className="text-gray-700 mb-4">אנו לא מוכרים או משתפים את המידע האישי שלכם עם צדדים שלישיים, למעט במקרים הבאים:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>בהסכמתכם המפורשת</li>
                                <li>עם ספקי שירות מורשים הפועלים בשמנו (אירוח, אנליטיקה)</li>
                                <li>כאשר נדרש על פי חוק או צו בית משפט</li>
                                <li>להגנה על הזכויות, הרכוש או הבטיחות שלנו או של אחרים</li>
                                <li>במקרה של מיזוג, רכישה או מכירת נכסים</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. אבטחת מידע</h2>
                            <p className="text-gray-700 mb-4">
                                אנו נוקטים באמצעי אבטחה מתקדמים להגנה על המידע שלכם:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>הצפנת נתונים בעת העברה ובמנוחה</li>
                                <li>הגבלת גישה למידע לצוות מורשה בלבד</li>
                                <li>ניטור ובדיקות אבטחה שוטפות</li>
                                <li>גיבוי נתונים סדיר</li>
                                <li>עדכוני אבטחה קבועים</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. הזכויות שלכם</h2>
                            <p className="text-gray-700 mb-4">יש לכם הזכויות הבאות לגבי המידע האישי שלכם:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>עיון במידע האישי השמור עליכם</li>
                                <li>תיקון או עדכון מידע לא נכון</li>
                                <li>מחיקת המידע שלכם ("הזכות להישכח")</li>
                                <li>הגבלת עיבוד המידע שלכם</li>
                                <li>ניידות נתונים - קבלת עותק של המידע שלכם</li>
                                <li>ביטול הסכמה לעיבוד מידע</li>
                                <li>הגשת תלונה לרשות הגנת הפרטיות</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. שמירת מידע</h2>
                            <p className="text-gray-700">
                                אנו שומרים את המידע האישי שלכם כל עוד החשבון שלכם פעיל, או כפי שנדרש למתן השירותים.
                                לאחר מחיקת החשבון, נמחק את המידע תוך 30 יום, למעט מידע שנדרש לשמור על פי חוק.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. שירותי צד שלישי</h2>
                            <p className="text-gray-700 mb-4">האפליקציה שלנו עשויה להכיל קישורים או שילובים עם שירותי צד שלישי:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Google Analytics לניתוח שימוש</li>
                                <li>Google OAuth להתחברות</li>
                                <li>שירותי אירוח ענן</li>
                                <li>ספקי תשלומים (אם רלוונטי)</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                שירותים אלו כפופים למדיניות הפרטיות שלהם, ואנו ממליצים לקרוא אותן.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. משתמשים קטינים</h2>
                            <p className="text-gray-700">
                                השירות שלנו מיועד למשתמשים מעל גיל 13. איננו אוספים במכוון מידע אישי מילדים מתחת לגיל 13.
                                אם נודע לנו שאספנו מידע כזה, נמחק אותו מיד.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. שינויים במדיניות</h2>
                            <p className="text-gray-700">
                                אנו עשויים לעדכן את מדיניות הפרטיות מעת לעת. שינויים מהותיים יובאו לידיעתכם באמצעות
                                האפליקציה או בדוא"ל. המשך השימוש לאחר השינויים מהווה הסכמה למדיניות המעודכנת.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. יצירת קשר</h2>
                            <p className="text-gray-700 mb-4">
                                לשאלות או בקשות בנוגע למדיניות הפרטיות או לטיפול במידע האישי שלכם, ניתן לפנות אלינו:
                            </p>
                            <ul className="list-none text-gray-700 space-y-2">
                                <li><strong>אימייל:</strong> privacy@recipeforlater.com</li>
                                <li><strong>כתובת:</strong> תל אביב, ישראל</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. תקינות השפה</h2>
                            <p className="text-gray-700">
                                מדיניות פרטיות זו נכתבה בעברית. במקרה של סתירה בין הגרסה העברית לגרסאות בשפות אחרות,
                                הגרסה העברית תגבר.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
} 
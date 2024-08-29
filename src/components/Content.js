const workingStepsContent = [
    {
      icon: '/svg/Icons/scan.svg',
      title: 'Scan',
      text: 'Scan your Wollette QR at the checkout to receive digital receipt and collect points & coupons',
    },
    {
      icon: '/svg/Icons/pay.svg',
      title: 'Pay',
      text: 'Use your debit or credit cards to pay for goods and services purchased online or in store',
    },
    {
      icon: '/svg/Icons/site_sky.svg',
      title: 'Send',
      text: 'Itemised transaction details and receipts are transmitted, by partner merchants, to Wollette and bank statement entry is retrieved from the authorised payment account by Wollette',
    },
    {
      icon: '/svg/Icons/wollete_full.svg',
      title: 'Wollete',
      text: 'Use your Wollette App to view and share your paperless receipts, bills, and itemised transaction details. Also, you will be able to see/use your accrued loyalty points, set shopping budgets, and see real-time price comparison of favourite items',
    },
  ]
  
  const goodPointsContent = [
    {
      icon: '/svg/Icons/stars.svg',
      title: 'Ease of use',
      text: 'By linking your payment accounts to our platform, you unlock a seamless integration between your shopping activities, digital receipts, and rewards programs. The system automatically links your receipts with the corresponding payment account, providing you with a comprehensive overview of your transactions.',
    },
    {
      icon: '/svg/Icons/maximize_your_shopping.svg',
      title: 'Intelligent shopping assistant',
      text: 'Our AI powered shopping assistant actively searches for cheapest prices on your favourite products, empowering you to make smarter purchasing decisions',
    },
    { 
      icon: '/svg/Icons/smart_price_comparision.svg',
      title: 'Smart price comparison',
      text: 'Smart and simple. Our intelligent price comparison engine is always on the lookout for the cheapest prices on your favourite products, anytime, anywhere, everywhere',
    },
  ]
  
  const navbarContent = ['Home', 'Services', 'About', 'Contact', 'Resources']
  
  const servicesList = ["Quiz","Chatbot","Stats"]
  const AboutList = []
  const ContactList = []
  const resourcesList = ['News','Professionals']

  const homeProps = [
    {
      imageURL: '/images/depression.jpg',
      title: 'Understanding Depression',
      heading: 'Breaking the Stigma of Mental Health.',
      description: 'Depression is a common yet serious mood disorder that affects how you feel, think, and handle daily activities. It is essential to recognize the signs and seek help to manage this condition effectively.',
      extraLarge: true,
      imageRight: false,
    },
    {
      imageURL: '/images/ptsd.jpg',
      title: 'Living with PTSD',
      heading: 'Coping with Post-Traumatic Stress Disorder.',
      description: 'PTSD is a mental health condition triggered by a terrifying event. It involves intense, disturbing thoughts and feelings related to the traumatic experience, even long after the event has ended.',
      extraLarge: false,
      imageRight: true,
    },
    {
      imageURL: '/images/peace.jpg',
      title: 'Managing Anxiety',
      heading: 'Finding Peace in a Stressful World.',
      description: 'Anxiety disorders involve excessive fear or worry that can interfere with daily life. Understanding the triggers and learning coping mechanisms are vital steps in managing anxiety.',
      extraLarge: true,
      imageRight: false,
    },
    {
      imageURL: '/images/suicide.jpg',
      title: 'Addressing Suicide Rates',
      heading: 'Preventing the Unthinkable.',
      description: 'Suicide is a global health crisis that takes nearly 800,000 lives each year. Awareness, support, and intervention are crucial in preventing these tragic losses.',
      extraLarge: false,
      imageRight: true, 
    },
    {
      imageURL: '/images/mental.jpg',
      title: 'Overall Mental Health',
      heading: 'Nurturing a Balanced Mind.',
      description: 'Mental health encompasses emotional, psychological, and social well-being. It affects how we think, feel, and act. Promoting mental health is vital for overall well-being and quality of life.',
      extraLarge: true,
      imageRight: false,
    },
  ];
  

  export {
    servicesList,
    ContactList,
    goodPointsContent,
    navbarContent,
    AboutList,
    resourcesList,
    workingStepsContent,
    homeProps
  }
  
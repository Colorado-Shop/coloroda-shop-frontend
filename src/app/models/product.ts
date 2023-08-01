import { Price, Unit } from './price'
import { Deserializable } from './deserializable'

export class Product implements Deserializable {
  id: string
  name: string
  category: string
  description1: string
  description2: string
  // additionalInfo: string
  photo: string
  prices: Price[] = new Array()

  deserialize(input: any): this {
    Object.assign(this, input)
    this.prices = input.prices.map((price: Price) =>
      new Price().deserialize(price),
    )
    return this
  }
}

export const PRODUCTS: Product[] = [
  {
    id: 'black-ice-strain',
    name: 'Black Ice',
    photo: 'assets/img/products/black-ice.jpeg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 270 },
      { unit: Unit.two, amount: 550 },
      { unit: Unit.three, amount: 1000 },
      { unit: Unit.four, amount: 1500 },
    ],
    description1:
      'A cross between hybrids Black Domina and White Widow, Black Ice is an indica-dominant hybrid that is a reliable sedative. Although this flower has a pleasant aroma, its potency sets it apart from the rest. A product of Moon Seeds, Black Ice offers a high yield with an impressive THC content, making this strain optimal for pain and insomnia relief.',
    description2:
      'When most people think of black ice they think of the slippery substance that plagues parking lots when its cold — this strain offers no such unpleasantness. Black Ice was originally cultivated by Spain-based The Moon Seeds as a cross between Black Domina and White Widow. The buds feature aromatic notes of sour-sweet berries coupled with earthy undertones. As an Indica-dominant hybrid with anywhere between 19-24% THC content, Black Ice delivers a heavy calming effect and is best enjoyed during the evening.',
  } as Product,

  {
    id: 'lucida-williams-strain',
    name: 'Lucinda Williams',
    photo: 'assets/img/products/lucinda-williams.jpeg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 270 },
      { unit: Unit.two, amount: 550 },
      { unit: Unit.three, amount: 1000 },
      { unit: Unit.four, amount: 1500 },
    ],
    description1:
      'Lucinda Williams is a bright and lively sativa that packs full flavor. Upon opening the packaging, the patient will be engulfed in a light, orange aroma with hints of funky, spicy flavors. Sativa/Hybrid. THC: 12-22%. Top Terpenes: Limonene, Myrcene, B-Caryophyllene.',
    description2:
      'Lucinda Williams is a bright and lively sativa that packs full flavor. Upon opening the packaging, the patient will be engulfed in a light, orange aroma with hints of funky, spicy flavors. Sativa/Hybrid. THC: 12-22%. Top Terpenes: Limonene, Myrcene, B-Caryophyllene.',
  } as Product,

  {
    id: 'sueno-strain',
    name: 'Sueno',
    photo: 'assets/img/products/sueno.jpeg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 270 },
      { unit: Unit.two, amount: 550 },
      { unit: Unit.three, amount: 1000 },
      { unit: Unit.four, amount: 1500 },
    ],
    description1:
      'Sueno (or Sueño), also known simply as "Dream," is a combination of Blue Dream and Sour Diesel originally from an unknown breeder. The cultivar inherits the berry flavors and spicy, diesel aromas of its lineage. Lab tests report an average of up to 27% THC, as such, consumption may be best left to seasoned users.',
    description2:
      'Little growing information is available on Sueno. At full maturity, the plant produces small, mint-green buds with blue tints, orange hairs, and frosty white trichomes.',
  } as Product,

  {
    id: 'gary-paython-strain',
    name: 'Gary Payton',
    photo: 'assets/img/products/gary-paython.jpeg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 270 },
      { unit: Unit.two, amount: 550 },
      { unit: Unit.three, amount: 1000 },
      { unit: Unit.four, amount: 1500 },
    ],
    description1:
      'A collab between Cookies and Powerzzz Genetics, Gary Payton is a highly coveted Cookies cultivar named after the NBA Hall of Famer. Combining the Y and Snowman breeds a potent, flavorful, and colorful strain. It has high amounts of THC and almost no CBD, and middle-of-the-road effects that provide an even-keeled experience.',
    description2:
      'Cookies is pleased to announce the launch of Gary Payton, a unique strain named after the legendary Seattle SuperSonics and Hall of Fame player Gary Payton.',
  } as Product,

  {
    id: 'el-fuego-strain',
    name: 'El Fuego',
    photo: 'assets/img/products/el-fuego.jpeg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 270 },
      { unit: Unit.two, amount: 550 },
      { unit: Unit.three, amount: 1000 },
      { unit: Unit.four, amount: 1500 },
    ],
    description1:
      'El Fuego is 70% indica and 30% sativa; super relaxing and chill highs follow the innocent excess of this strain. ... This strain is pretty easy to grow and has a flowering time of 8-9 weeks. After the plants are cropped, the THC-rich nugs are ready to be dried and cured.',
    description2:
      'This strain is pretty easy to grow and has a flowering time of 8-9 weeks. After the plants are cropped, the THC-rich nugs are ready to be dried and cured.',
  } as Product,

  {
    id: 'purple-punch-strain',
    name: 'Purple Punch',
    photo: 'assets/img/products/Purple-Punch.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.two, amount: 215 },
      { unit: Unit.three, amount: 400 },
      { unit: Unit.four, amount: 700 },
      { unit: Unit.five, amount: 1000 },
    ],
    description1:
      'Purple Punch is the sweet and sedating union of two indica-dominant classics. By breeding Larry OG with Granddaddy Purple, the astonishing trichome laden Purple Punch was born, smelling of grape candy, blueberry muffins, and tart Kool-Aid. The potency of this strain gives the consumer a one-two punch to the head and body, initially landing between the eyes and settling down into the limbs.',
    description2:
      'Purple Punch is a delicious dessert strain that is best suited for after dinner. Its effects may help with managing nausea, stress, minor body aches, and sleeplessness.',
  } as Product,

  {
    id: 'sherbet-strain',
    name: 'Sherbet Strain',
    photo: 'assets/img/products/sunset-sherbet.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.two, amount: 215 },
      { unit: Unit.three, amount: 400 },
      { unit: Unit.four, amount: 700 },
      { unit: Unit.five, amount: 1000 },
    ],
    description1:
      'Heir to the GSC throne is Sherbert, also known as Sherbet and/or Sunset Sherbert, an indica-leaning hybrid with intoxicatingly potent effects. Bred by Mr. Sherbinski, Sherbert inherits the genetic lineage of its GSC parent, whose ancestors include the famed OG Kush, Cherry Pie, and Durban Poison. Crossed with Pink Panties, Sherbert exhibits powerful full-body effects elevated by a jolt of cerebral energy.',
    description2:
      'A complex aroma colors Sherbert with notes of skunky citrus, sweet berry, and that candy-like smell redolent of its GSC parent. Stress, tension, and sour moods melt away with the carefree mindset and physical relaxation that comes with this rich hybrid.',
  } as Product,

  {
    id: 'khalifa-kush-strain',
    name: 'Khalifa Kush',
    photo: 'assets/img/products/khalifa-Kush-strain.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.two, amount: 215 },
      { unit: Unit.three, amount: 400 },
      { unit: Unit.four, amount: 700 },
      { unit: Unit.five, amount: 1000 },
    ],
    description1:
      'Khalifa Kush, or Wiz Khalifa OG,  is a hybrid that was bred specifically for the rap artist Wiz Khalifa, who claims it descended from an OG strain. The ‘real’ Khalifa Kush is supposedly unavailable to the public, but those who have acquired strains under this name say that the effects and aromas are similar to that of OG Kush: sour lemon and pine, with an active cerebral buzz ideal for morning and daytime use.',
    description2:
      'Khalifa Kush, or Wiz Khalifa OG,  is a hybrid that was bred specifically for the rap artist Wiz Khalifa, who claims it descended from an OG strain. The ‘real’ Khalifa Kush is supposedly unavailable to the public, but those who have acquired strains under this name say that the effects and aromas are similar to that of OG Kush: sour lemon and pine, with an active cerebral buzz ideal for morning and daytime use.',
  } as Product,

  {
    id: 'harlequin-strain',
    name: 'Harliquin Strain',
    photo: 'assets/img/products/Harlequin-weed.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.two, amount: 215 },
      { unit: Unit.three, amount: 400 },
      { unit: Unit.four, amount: 700 },
      { unit: Unit.five, amount: 1000 },
    ],
    description1:
      'Harlequin is a 75/25 sativa-dominant strain renowned for its reliable expression of CBD. A descendant of Colombian Gold, a Nepali indica, and Thai and Swiss landrace strains, you can depend on Harlequin to provide clear-headed, alert sativa effects. Harlequins high levels of CBD make this strain one of the most effective out there for treatment of pain and anxiety, as CBD can counteract THC’s paranoia while amplifying its painkilling properties.',
    description2:
      'Harlequins high levels of CBD make this strain one of the most effective out there for treatment of pain and anxiety, as CBD can counteract THC’s paranoia while amplifying its painkilling properties. Flavors can range from earthy musk to sweet mango, but without a doubt, what draws crowds to Harlequin is its ability to relax without sedation and to relieve without intoxication.',
  } as Product,

  {
    id: 'amnesia-haze-strain',
    name: 'Amnesia Haze',
    photo: 'assets/img/products/amnesia-haze.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.two, amount: 215 },
      { unit: Unit.three, amount: 400 },
      { unit: Unit.four, amount: 700 },
      { unit: Unit.five, amount: 1000 },
    ],
    description1:
      'With earthy flavors of lemons and citrus, Amnesia Haze is a perfect strain to start your day with a smile. The uplifting, energetic buzz is one you won’t soon forget. Its genetics have been traced back to the South Asian and Jamaican landrace strains, and this Cannabis Cup winner (1st place 2004, 1st place Sativa Cup 2012) has since been popularized in the coffee shops of Amsterdam.',
    description2:
      'With earthy flavors of lemons and citrus, Amnesia Haze is a perfect strain to start your day with a smile. The uplifting, energetic buzz is one you won’t soon forget. Its genetics have been traced back to the South Asian and Jamaican landrace strains, and this Cannabis Cup winner (1st place 2004, 1st place Sativa Cup 2012) has since been popularized in the coffee shops of Amsterdam.',
  } as Product,

  {
    id: 'jack-herer-strain',
    name: 'Jack Herer',
    photo: 'assets/img/products/jack-herer.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.two, amount: 215 },
      { unit: Unit.three, amount: 400 },
      { unit: Unit.four, amount: 700 },
      { unit: Unit.five, amount: 1000 },
    ],
    description1:
      'Jack Herer is a sativa-dominant cannabis strain that has gained as much renown as its namesake, the marijuana activist and author of The Emperor Wears No Clothes. Combining a Haze hybrid with a Northern Lights #5 and Shiva Skunk cross, Sensi Seeds created Jack Herer hoping to capture both cerebral elevation and heavy resin production. Its rich genetic background gives rise to several different variations of Jack Herer, each phenotype bearing its own unique features and effects. However, consumers typically describe this 55% sativa hybrid as blissful, clear-headed, and creative.',
    description2:
      'Jack Herer was created in the Netherlands in the mid-1990s, where it was later distributed by Dutch pharmacies as a recognized medical-grade strain. Since then, this spicy, pine-scented strain has taken home numerous awards for its quality and potency. Many breeders have attempted to cultivate this staple strain themselves in sunny or Mediterranean climates, and indoor growers should wait 50 to 70 days for Jack Herer to flower.',
  } as Product,

  {
    id: 'original-glue-strain',
    name: 'Original Glue',
    photo: 'assets/img/products/remedy_gorilla-glue.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.two, amount: 215 },
      { unit: Unit.three, amount: 400 },
      { unit: Unit.four, amount: 700 },
      { unit: Unit.five, amount: 1000 },
    ],
    description1:
      'Original Glue (GG4), developed by GG Strains, is a potent hybrid strain that delivers heavy-handed euphoria and relaxation, leaving you feeling “glued” to the couch. Its chunky, resin-covered buds fill the room with pungent earthy and sour aromas inherited from its parent strains, Chem’s Sister, Sour Dubb, and Chocolate Diesel.',
    description2:
      'Taking first place in both the Michigan and Los Angeles 2014 Cannabis Cups as well as the High Times Jamaican World Cup, this multiple award-winning hybrids supremacy is no longer a secret, and consumers will search far and wide to get their hands sticky with Original Glue (GG4).',
  } as Product,

  {
    id: 'wedding-cake-strain',
    name: 'Wedding Cake Strain',
    photo: 'assets/img/products/wedding-cake2.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 210 },
      { unit: Unit.three, amount: 410 },
      { unit: Unit.four, amount: 750 },
      { unit: Unit.five, amount: 1200 },
    ],
    description1:
      'Contrary to novice believes, Wedding Cake strain doesn’t really taste like wedding cake, but rather earth like and sour. Only towards the end do you get a slight hint of sugary sweetness. But despite its deceiving name, the Wedding Cake strain is super potent, with THC levels around 27%, and can induce a calming and happy high that uplifts and rejuvenates. It can also help with nerves pains of all sorts.According to breeder Seed Junky Genetics, Wedding Cake, also known as Pink Cookies, is a phenotype of Triangle Mints. This delectable treat is rich with tangy sweet earth and pepper, taking notes and dimension from its OG lineage. Enjoy this double dose of dense dankness with care, as certain farms have noted its extremely high THC content. Possible side effects from Wedding Cake include dry mouth and lightheadedness.',
    description2:
      'Wedding Cake is a hybrid with indica-dominance. It is attained by crossing cherry Pie and Girl Scout Cookies (GSC). It gives an exceptionally sweet aromatic essence and a fruity flavour. The taste is a perfect combination of sweetness of cookies and fruitiness of a cherry pie. The high from this strain is incredibly uplifting yet relaxing, providing a burst of energy even as it soothes the mind into a state of relative calm. Given time, this heady effect spreads to the body – especially the stomach – stimulating appetite and triggering an intense case of the munchies. Medical consumers report using Wedding Cake to treat depression, chronic pain, arthritis, inflammation, daily stress, and cramps. Higher doses may cause couch-lock, making this a versatile strain that can treat insomnia, too.',
  } as Product,

  {
    id: 'whooody-strain',
    name: 'WhoOody Strain',
    photo: 'assets/img/products/whooody-strain.jpeg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 100 },
      { unit: Unit.two, amount: 120 },
      { unit: Unit.three, amount: 562 },
      { unit: Unit.four, amount: 762 },
      { unit: Unit.five, amount: 1262 },
    ],
    description1:
      'whoOody is an indica strain which can be cultivated both indoors (where the plants will need a flowering time of ±57 days) and outdoors. Whooody strain provides amellow and relaxed body high little psychedelic tingles. While certainly indica dominant in nature, whooody shies away from couch lock or heavy eyes, making it a great daytime medicine for pain relief. When concentrated, whooody crashes out massive diamonds that are brilliant enough to make a Kardashian jealous.',
    description2:
      "WhoOody gives a pungent mixture of berries, tropical fruit cocktail, and airplane fuel{ - our real love for this cultivar comes from the Holyfield high though. It's like two left jabs and an uppercut followed closely by a speeding train and finished with a semi truck slamming directly into your forehead.",
  } as Product,

  {
    id: 'blueberry-strain',
    name: 'Blueberry',
    photo: 'assets/img/products/blueberry.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      'Blueberry Kush is a strong indica strain that slowly brings on a heavy body sensation, helping patients forget their pain and relax. Originally from Oregon, this strain is a hybrid of Blueberry and OG Kush, which is evident in its fresh berry aroma with notes of earthy herbalness. This indica is best for evenings or before bed',
    description2:
      'Blueberry Kush is a strong indica strain that slowly brings on a heavy body sensation, helping patients forget their pain and relax. Originally from Oregon, this strain is a hybrid of Blueberry andS OG Kush, which is evident in its fresh berry aroma with notes of earthy herbalness. This indica is best for evenings or before bed.',
    // additionalInfo:
    //   'Dosage should be individualized according to the therapeutic needs and response of the patient. ADDERALL XR® should be administered at the lowest effective dosage. In children with ADHD who are 6 years of age and older and are either starting treatment for the first time or switching from another medication, start with 10 mg once daily in the morning. Daily dosage may be adjusted in increments of 5 mg or 10 mg at weekly intervals. When in the judgement of the clinician a lower initial dose is appropriate, patients may begin treatment with 5 mg once daily in the morning. The maximum recommended dose for children is 30 mg a day; doses greater than 30 mg a day of the drug have not been studied in children. Amphetamines are not recommended for children under 3 years of age. ADDERALL XR™ has not been studied in children under 6 years of age. In adults with ADHD who are either starting treatment for the first time or switching from another medication, the recommended dose is 20 mg/day.',
  } as Product,
  {
    id: 'blue-dream-strain',
    name: 'Blue Dream',
    photo: 'assets/img/products/blue-dream.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      'Blue Dream, also known as Blueberry Haze, is a sativa-dominant hybrid strain of Cannabis. Blue Dream is a cross between theBlueberry and Haze strains, and was created around 2003 in Santa Cruz, California.[1] Its more remote ancestry includes Afghani, Thai, and Mexican strains. It is a clone-only strain propagated by cuttings, and is known for producing large harvests, as much as seven ounces per plant. Widely used for medical purposes, as of 2014 samples were testing at up to 25% THC and 2% CBD content. Blue Dream is high in terpenes as well, particularly alpha-Pinene, which is a bronchodilator and an antibiotic',
    description2:
      'Blue Dream is one of the most popular strains in the United States. This sativa-dominant hybrid is easy to grow and cultivate. One does not have to be an expert to grow cannabis from Blue Dream seeds. It can be grown both indoors and outdoors, and the plants reach up to 67 inches in height (roughly about 6 feet). However, they are vulnerable to a number of factors if grown outdoors, including extreme weather changes, temperature swings, and pests such as red spider mite. That’s why most people prefer to grow Blue Dream indoors. The expected yield in plants grown indoors and outdoors is similar. For example, a plant grown outdoors is expected to yield about 21 ounces per plant while an indoor growing should produce about 22 ounces on average. Even though the plant thrives in cold temperatures, the ideal range is between 65 and 85 degrees Fahrenheit.',
  } as Product,
  {
    id: 'brass-knuckles',
    name: 'Brass Knuckles',
    photo: 'assets/img/products/brass-knuckles.jpg',
    category: 'vape_pen',
    prices: [
      { unit: '7 Napalm OG Cartridge', amount: 140 },
      { unit: '7 Abracadabra Cartridge', amount: 140 },
      { unit: '7 Connected Cartridge', amount: 140 },
      { unit: '7 Tahoe OG Cartridge', amount: 140 },
    ],
    description1:
      'Knuckle up! When it comes to Super Premium CO2 oil products, Brass Knuckles reigns supreme. Renowned for their fire grams and oil cartridges that are known for flavor and potency, Brass Knuckles delivers when it comes to providing consumers top shelf product and ending prohibition. Real purity. Real integrity. No nonsense. No bullshit.',
    description2:
      "Knuckle up! When it comes to Super Premium CO2 oil products, Brass Knuckles reigns supreme. Renowned for their fire grams and oil cartridges that are known for flavor and potency, Brass Knuckles delivers when it comes to providing consumers top shelf product and ending prohibition. Real purity. Real integrity. No nonsense. No bullshit. Whether it's concentrates, cartridges, or batteries, one thing is absolutely clear: Brass Knuckles ain’t fucking around. Brass Knuckles speaks to true concentrate connoisseurs by mastering the art of extraction, exclusively using top-shelf cannabis strains. All of their products are lab tested to ensure they’re delivering the high-quality products patients deserve. Available in Sativa, Indica, and Hybrid, Brass Knuckles works with top strains including Gorilla Glue, Girl Scout Cookies, Jack Herer, and more. Brass Knuckle cartridges offer a full gram of super premium concentrate for the ultimate flavor experience and the most potent THC available. 510 thread and made with superior Quartz, Brass Knuckle cartridges are in a class of their own. Brass Knuckles - empower the people!",
  } as Product,
  {
    id: 'cannabis-oil',
    name: 'Cannabis Oil',
    photo: 'assets/img/products/cannabis-oil.jpg',
    category: 'concentrate',
    prices: [{ unit: '250mg', amount: 260 }],
    description1:
      'Cannabis essential oil is one of the most unusual [1] oils in the essential oil range, simply because of the plant from which it is derived. Although cannabis and hemp have been used for thousands of years as naturally growing herbs, their reputation as a drug in many parts of the world has complicated the relationship between users of cannabis and hemp, and authorities in certain places. The most important health benefits of cannabis essential oil include its ability to protect your skin, reduce stress and anxiety, improve the quality of sleep, boost appetite, optimize digestion, reduce pain, prevent certain cancers, and protect heart health.',
    description2:
      'The most important health benefits of cannabis essential oil include its ability to protect your skin, reduce stress and anxiety, improve the quality of sleep, boost appetite, optimize digestion, reduce pain, prevent certain cancers, and protect heart health. However, cannabis essential oil is a beneficial essential oil and is widely considered as one of the most effective oils for the alleviation of certain illnesses and conditions. It is extracted by steam distillation from the flowers and upper leaves of cannabis plants, which are in the Cannabis genus.',
  } as Product,
  {
    id: 'cbd-250',
    name: 'CBD Oil 250Mg',
    photo: 'assets/img/products/cbd-2.jpg',
    category: 'concentrate',
    prices: [{ unit: '250 mg', amount: 250 }],
    description1:
      'Cannabidiol is a popular natural remedy used for many common ailments. Better known as CBD, it is one of the 104 chemical compounds known as cannabinoids found in the cannabis or marijuana plant, Cannabis sativa (1). Tetrahydrocannabinol (THC) is the main psychoactive cannabinoid found in cannabis, and causes the sensation of getting “high” that’s often associated with marijuana. However, unlike THC, CBD is not psychoactive.',
    description2:
      'Cannabidiol is a popular natural remedy used for many common ailments. Better known as CBD, it is one of the 104 chemical compounds known as cannabinoids found in the cannabis or marijuana plant, Cannabis sativa (1). Tetrahydrocannabinol (THC) is the main psychoactive cannabinoid found in cannabis, and causes the sensation of getting “high” that’s often associated with marijuana. However, unlike THC, CBD is not psychoactive. This quality makes CBD an appealing option for those who are looking for relief from pain and other symptoms without the mind-altering effects of marijuana or certain pharmaceutical drugs. CBD oil is made by extracting CBD from the cannabis plant, then diluting it with a carrier oil like coconut or hemp seed oil. It’s gaining momentum in the health and wellness world, with some scientific studies confirming it may help treat a variety of ailments like chronic pain and anxiety.',
  } as Product,
  {
    id: 'cbd-350',
    name: 'CBD Oil 350Ml',
    photo: 'assets/img/products/cbd-1.jpg',
    category: 'concentrate',
    prices: [{ unit: '350 Ml', amount: 350 }],
    description1:
      'Cannabidiol is a popular natural remedy used for many common ailments. Better known as CBD, it is one of the 104 chemical compounds known as cannabinoids found in the cannabis or marijuana plant, Cannabis sativa (1). Tetrahydrocannabinol (THC) is the main psychoactive cannabinoid found in cannabis, and causes the sensation of getting “high” that’s often associated with marijuana. However, unlike THC, CBD is not psychoactive.',
    description2:
      'Cannabidiol is a popular natural remedy used for many common ailments. Better known as CBD, it is one of the 104 chemical compounds known as cannabinoids found in the cannabis or marijuana plant, Cannabis sativa (1). Tetrahydrocannabinol (THC) is the main psychoactive cannabinoid found in cannabis, and causes the sensation of getting “high” that’s often associated with marijuana. However, unlike THC, CBD is not psychoactive. This quality makes CBD an appealing option for those who are looking for relief from pain and other symptoms without the mind-altering effects of marijuana or certain pharmaceutical drugs. CBD oil is made by extracting CBD from the cannabis plant, then diluting it with a carrier oil like coconut or hemp seed oil. It’s gaining momentum in the health and wellness world, with some scientific studies confirming it may help treat a variety of ailments like chronic pain and anxiety.',
  } as Product,
  {
    id: 'chemdawg',
    name: 'ChemDawg (Chem Dog)',
    photo: 'assets/img/products/chemdawg.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      'Chemdawg is a legendary strain with an uncertain genetic history. While it is thought to be crossed from Thai and Nepalese sativa landraces by U.S. breeders, many have laid claim to this strain’s creation. Chemdawg’s origin stories include one account of a complicated seed exchange among fellow growers at a Grateful Dead concert and another tale pinning the strain’s parentage on a Colorado strain called Dog Bud (so named for its tendency to make the smoker roll over like a dog). Whatever its beginnings, Chemdawg has become a staple in the U.S. cannabis market for its unique taste and upbeat, energetic high. It has also been used to crossbreed several popular and successful strains. Chemdawg’s THC content has been measured at between 15% and 20%',
    description2:
      'Chemdawg is one of those marijuana strains that can really space you out for hours on end, only to snap back into reality and wonder how much time just past. What feels like hours is really a couple of minutes. The Chem Dawg strain has such a pungent stench and gassy flavor profile… It’s both disgusting and phenomenal at the same time. It shares a very similar terpene profile to Sour Diesel, at least in my personal experience as a medical marijuana patient. There are always very memorable smoke sessions with this strain. Great for managing mental disorders such as chronic stress, anxiety, PTSD, and migraines, the Chemdawg strain is becoming increasingly popular among medical marijuana patients in California, Colorado, and Washington state. The high from Chemdawg hits quickly, sometimes before users have had a chance to finish appreciating its distinctive diesel aroma. Smokers may experience a sharpening of the senses and an increased hyper-awareness of their surroundings. This initially disorienting head high becomes more productively cerebral and introspective in the right set and setting. Chemdawg can lend itself to exuberant conversation. Its ability to amplify sensory experiences also makes it particularly good for creative endeavors. Many users report a palpable sense of physical relaxation -- although nothing near couchlock -- leading to some speculation that Chemdawg has some indica in its genetics as well. Chemdawg’s strong cerebral high has made it valuable in treating some of the symptoms associated with stress, anxiety, and even PTSD. Some fans of the strain describe relief from chronic pain and migraines as well. Because of its potency and mental focus, Chemdawg has the potential to trigger the kind of manic, recursive thinking that can lead to paranoia. As such, even users with a high tolerance for THC are advised to moderate their intake accordingly.',
  } as Product,
  {
    id: 'edibles-cereals',
    name: 'Fruity Krispy Treat 350mg',
    photo: 'assets/img/products/edibles-cereals.jpg',
    category: 'edible',
    prices: [
      { unit: '350mg', amount: 20 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      'Enjoyable Edibles’ Fruity Krispy Treats are the fun marshmallowy snacks you’ve been wanting! When it comes to fun and fruity medicating, no one does it better than Enjoyable Edibles. Made with Fruity Dyno-Bites and premium medical cannabis, these medicinal crispies are both delicious and effective. Handcrafted with pure, solvent-less cannabis and containing 350mg of THC, enjoy with extreme caution if you’re a newcomer to medicinal edibles. Fun and easy, Enjoyable Edibles make this Fruity Krispy Treats with cannabis and love',
    description2: 'Fruity Krispy has never been so good 350mg',
  } as Product,
  {
    id: 'exotic-carts',
    name: 'Exotic Carts',
    photo: 'assets/img/products/exotic-carts.jpg',
    category: 'vape_pen',
    prices: [{ unit: '5 Cart', amount: 100 }],
    description1:
      'Buy best grade exortic carts here. Vape pens are a type of vaporizer designed specifically to vaporize cannabis distillates and oils. They are called pens because the design of the vape device closely resembles that of a traditional pen. A vape pen consists of two pieces: a battery and cartridgeVape pens are a type of vaporizer designed specifically to vaporize cannabis distillates and oils. They are called pens because the design of the vape device closely resembles that of a traditional pen. A vape pen consists of two pieces: a battery and cartridge',
    description2:
      'Vape pens are a type of vaporizer designed specifically to vaporize cannabis distillates and oils. They are called pens because the design of the vape device closely resembles that of a traditional pen. A vape pen consists of two pieces: a battery and cartridgeVape pens are a type of vaporizer designed specifically to vaporize cannabis distillates and oils. They are called pens because the design of the vape device closely resembles that of a traditional pen. A vape pen consists of two pieces: a battery and cartridge',
  } as Product,
  {
    id: 'forbidden-fruit',
    name: 'Forbidden Fruit',
    photo: 'assets/img/products/forbidden-fruit.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      'Forbidden Fruit is the mouthwatering cross of Cherry Pie x Tangie. This sumptuous genetic cross expresses a beautiful dense bud structure with deep purple hues, dark green foliage, and wiry orange hairs. The terpene profile is a perfect mixture of Cherry Pie’s musky, sweet cherry undertones and Tangie’s loud tropical flavors. There are also notes of pine, mango, and passionfruit candy. The effects hit hard between the eyes and lay into the body with each hit. Forbidden Fruit’s deep physical relaxation and mental stoniness make it perfect for dulling minor physical discomfort and discarding stress.',
    description2:
      'Forbidden Fruit medical cannabis can reach THC levels of up to 25 percent. This bounty of THC gives it incredible pain fighting power. Many ailments have been recognized as benefiting from treatment with medical cannabis such as Forbidden Fruit marijuana. Some of these ailments are the result of inflammation in the body. One condition in which inflammation attack the myelin sheath surrounding neurons is called Multiple Sclerosis. Symptoms appear depending on what part of the nervous system may have been attacked. Often, this inflammation results in pain. Some sufferers describe their feet feeling as if it is on fire. Many sufferers have tried medical marijuana and attest to the positive effects it has in relieving pain caused by the disorder. Not only does it banish pain, it also reduces inflammation in the body which causes the pain in the first place. Forbidden Fruit marijuana is also useful in other inflammatory conditions such as arthritis and Carpal Tunnel Syndrome. Forbidden Fruit marijuana can also address neuropathic pain. This is also pain which results from damage in the nervous system. Shingles is a type of illness caused by damage to the nervous system done by the chicken pox virus. Medical marijuana can help address the sharp and burning pain caused by small lesions that occur due to the virus which is dormant in most people. Other types of neuropathic pain which may respond to treatment with medical marijuana include diabetic polyneuropathy pain, fibromyalgia, and CFS pain.',
  } as Product,

  {
    id: 'girls-scout',
    name: 'Girls Scout',
    photo: 'assets/img/products/girls-scout.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      "Girl Scout Cookies is an indica-dominant hybrid with a strong sativa component (40:60 sativa/indica ratio). This strain can reach THC levels of up to 28%, meaning it's one of the most potent strains available to medical marijuana patients. This strain provides the best aspects of both sativa and indica, and the high is powerful, happy, and euphoric, but with couch-lock body effects and feelings of lethargy.",
    description2:
      "Girl Scout Cookies is an indica-dominant hybrid with a strong sativa component (40:60 sativa/indica ratio). This strain can reach THC levels of up to 28%, meaning it's one of the most potent strains available to medical marijuana patients. This strain provides the best aspects of both sativa and indica, and the high is powerful, happy, and euphoric, but with couch-lock body effects and feelings of lethargy. Girl Scout Cookies tastes sweet and earthy, and it smells much the same. It's most effective at treating anxiety, stress, and depression, though it's also good for appetite. Dry mouth is the only likely adverse effect, though others are possible. This strain began as a crossbreed of OG Kush and a near-even hybrid; (Durban Poison X F1). Girl Scout Cookies first appeared in California and is now one of the most popular strains in North America, where sells best on the West Coast and in Michigan. The high lasts for hours, making Girl Scout Cookies a good deal in most places. It can be difficult to grow, but it's fast becoming a staple among home cultivators.",
  } as Product,
  {
    id: 'god-gift',
    name: "God's Gift",
    photo: 'assets/img/products/god-gift.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      'A strain that became popular in California dispensaries in 2005, God\'s Gift contains flavors of grape, citrus, and hash. Its parents are Granddaddy Purple and OG Kush. No matter what your belief system, this strain is a "gift" with its strong THC content of 18-22%. Its flowering time usually takes approximately 8-9 weeks.',
    description2:
      "A strain that became popular in California dispensaries in 2005, God's Gift contains flavors of grape, citrus, and hash. Its parents are Granddaddy Purple and OG Kush. No matter what your belief system, this strain is a",
  } as Product,
  {
    id: 'golden-goat',
    name: 'Golden Goat',
    photo: 'assets/img/products/golden-goat.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      "Golden Goat was created by accident in Topeka, Kansas, when a male Hawaiian-Romulan pollinated Mr. Dank's Island Sweet Skunk mother. The strain is often light green and pink in color, which is indicative of its Hawaiian sativa side. The scent is described as being a combination of sweet, sour, and spicy, with a tropical fruit flavor. Effects are strong and felt from head to toe, lasting about 1-2 hours. Flowering time is 9-11 weeks, with a golden appearance closer to harvest. This sativa-dominant hybrid has a THC level of up to 23% and a CBD of 1.07%.",
    description2:
      "This strain exhibits heavy, potent sativa effects that can be a little much for the anxiety-prone at times, with a racing heart, buzzing body, and near-frenzied thought patterns. For those who like racier sativas, it will provide a wonderful creative and social boost, seemingly making it impossible to sit down at times. It's a strain that works best on a sunny day with friends rather than a night home alone. The Romulan element adds a quality pain reduction and muscle tension relief element that seems to kick in most strongly later in the duration, making the body more able to keep up with the brain's demands.",
  } as Product,
  {
    id: 'grand-daddy',
    name: 'Grand Daddy',
    photo: 'assets/img/products/grand-dady.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      "Grand Daddy Purple (aka Grand Daddy Purps) is one of the most popular Indica strains on the west coast and is perhaps the most well known 'purple' cannabis strain in the US. Created back in 2003 by Ken Estes in the San Francisco Bay Area, Ken and his team sought out to create the ultimate Indica hybrid by merging two strains with fantastic genetics - Purple Urkle and Big Bud. The product of these two, Grand Daddy Purple, is a spitting image of it's parents' two best qualities - the deep and dark purple hue from Purple Urkle and the overgrown, dense buds of Big Bud. The dark purple buds blend well with the bright orange hairs and frosted white trichomes that generously cover the bud making it an extremely photogenic strain.",
    description2:
      "Grand Daddy Purple (aka Grand Daddy Purps) is one of the most popular Indica strains on the west coast and is perhaps the most well known 'purple' cannabis strain in the US. Created back in 2003 by Ken Estes in the San Francisco Bay Area, Ken and his team sought out to create the ultimate Indica hybrid by merging two strains with fantastic genetics - Purple Urkle and Big Bud. The product of these two, Grand Daddy Purple, is a spitting image of it's parents' two best qualities - the deep and dark purple hue from Purple Urkle and the overgrown, dense buds of Big Bud. The dark purple buds blend well with the bright orange hairs and frosted white trichomes that generously cover the bud making it an extremely photogenic strain",
  } as Product,
  {
    id: 'grape-ape',
    name: 'Grape Ape',
    photo: 'assets/img/products/grape-ape.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      'Grape Ape, propagated by Apothecary Genetics and Barney’s Farm, is a mostly indica strain that crosses Mendocino Purps, Skunk, and Afghani. Named for its distinct grape-like smell, this indica is known for providing carefree relaxation that can help soothe pain, stress, and anxiety. Its dense, compact buds are wreathed in deep purple leaves which darken as this indica reaches full maturation following its 7 to 8 week flowering time.',
    description2:
      'Grape Ape, propagated by Apothecary Genetics and Barney’s Farm, is a mostly indica strain that crosses Mendocino Purps, Skunk, and Afghani. Named for its distinct grape-like smell, this indica is known for providing carefree relaxation that can help soothe pain, stress, and anxiety. Its dense, compact buds are wreathed in deep purple leaves which darken as this indica reaches full maturation following its 7 to 8 week flowering time.',
  } as Product,
  {
    id: 'green-crack',
    name: 'Green Crack',
    photo: 'assets/img/products/green-crack.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      'Don’t let the name fool you: this is pure cannabis. Few strains compare to Green Crack’s sharp energy and focus as it induces an invigorating mental buzz that keeps you going throughout the day. With a tangy, fruity flavor redolent of mango, Green Crack is a great daytime strain that may help consumers fight fatigue, stress, and depression',
    description2:
      'Don’t let the name fool you: this is pure cannabis. Few strains compare to Green Crack’s sharp energy and focus as it induces an invigorating mental buzz that keeps you going throughout the day. With a tangy, fruity flavor redolent of mango, Green Crack is a great daytime strain that may help consumers fight fatigue, stress, and depression. Green Crack has branched into two genetic lineages, the most common of which is its sativa line descended from Skunk #1. The 75% indica variety of Green Crack is said to have come from an Afghani strain, and is marked by a tighter bud structure. Because its name perpetuates a negative image of cannabis, some people have taken to calling this strain Cush (with a ‘C’) or Green kush instead',
  } as Product,
  {
    id: 'gushers',
    name: 'Gushers',
    photo: 'assets/img/products/gushers.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 270 },
      { unit: Unit.two, amount: 550 },
      { unit: Unit.three, amount: 1000 },
      { unit: Unit.four, amount: 1500 },
    ],
    description1:
      'Though the name is reminiscent of a gummy-gooey snack packed in your lunch as a kid, the genetics are far from elementary. Parent strain Gelato #41 comes from Cookie family’s genetics of Girl Scout Cookie crossed with Sunset Sherbet, lending a fruity cookie aroma to the strain. The other parent strain responsible for Gushers’ genetics is Triangle Kush, which is an indica that originated from Florida. Combined, the two parents produce an offspring that provides relief to patients looking to alleviate symptoms associated with anxiety, chronic pain and depression.',
    description2:
      'Though the name is reminiscent of a gummy-gooey snack packed in your lunch as a kid, the genetics are far from elementary. Parent strain Gelato #41 comes from Cookie family’s genetics of Girl Scout Cookie crossed with Sunset Sherbet, lending a fruity cookie aroma to the strain. The other parent strain responsible for Gushers’ genetics is Triangle Kush, which is an indica that originated from Florida. Combined, the two parents produce an offspring that provides relief to patients looking to alleviate symptoms associated with anxiety, chronic pain and depression.',
  } as Product,
  {
    id: 'indica-seeds',
    name: 'Indica Seeds',
    photo: 'assets/img/products/indica-seed.jpg',
    category: 'seed',
    prices: [
      { unit: '10 seeds', amount: 170 },
      { unit: '20 seeds', amount: 220 },
      { unit: '50 seeds', amount: 500 },
      { unit: '100 seeds', amount: 1400 },
    ],
    description1:
      'Indica marijuana seeds offer a shorter, faster and stockier plant and are renowned for their fragrant buds and relaxing body stones. The fastest of these strains can be ready in as little as 8 weeks making them a popular choice for both indoor and outdoor gardeners looking for a quick turnaround and to maximise returns.',
    description2:
      'Indica marijuana seeds offer a shorter, faster and stockier plant and are renowned for their fragrant buds and relaxing body stones. The fastest of these strains can be ready in as little as 8 weeks making them a popular choice for both indoor and outdoor gardeners looking for a quick turnaround and to maximise returns.',
  } as Product,
  {
    id: 'kali-mist',
    name: 'Kali Mist',
    photo: 'assets/img/products/kali-mist.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 220 },
      { unit: Unit.two, amount: 362 },
      { unit: Unit.three, amount: 982 },
      { unit: Unit.four, amount: 1842 },
      { unit: Unit.five, amount: 3122 },
    ],
    description1:
      'Kali Mist is known to deliver clear-headed, energetic effects that can verge on psychedelic at times. Despite having an unknown genetic history, Kali Mist is believed to have originated in the 1990s through crossing two sativa-dominant hybrids. This lightweight sativa is a perfect choice for consumers looking to maintain focus and productivity throughout their day.',
    description2:
      'Kali Mist is a 90% Sativa hybrid that placed first both in the Hydro Cup of 1995 and the 2000 Seed Company Sativa Cup. The strain is a powerful two-hit combo of unknown Sativa hybrids that delivers a blast of uplifting energy. Experienced users will likely find that it clears the mind. Some also report that Kali Mist stimulates thought and find it good for writing, yoga, and meditation. This strain can be quite psychedelic at higher doses, but inexperienced users may feel this effect even at lower doses. The psychedelic property of the strain may lead to feelings of paranoia and anxiety. For this reason, users should limit hits to one or two during the day. Kali Mist may also cause dry mouth and eyes and occasional headaches. This Sativa hybrid is most often prescribed to alleviate the symptoms of stress, anxiety, and depression, and it may be used at any time of day. Some find it useful for daytime pain management, but Kali Mist may not be the best solution for severe aches and pains. Patients suffering eating disorders such as anorexia and bulimia may choose this strain to induce appetite.',
  } as Product,
  {
    id: 'moonrock',
    name: 'Moon Rocks',
    photo: 'assets/img/products/moonrock.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 220 },
      { unit: Unit.two, amount: 362 },
      { unit: Unit.three, amount: 982 },
      { unit: Unit.four, amount: 1842 },
      { unit: Unit.five, amount: 3122 },
    ],
    description1:
      'Moon Rocks are a THC megazord—they’re essentially cannabis buds (historically GSC, but any strain suffices) dipped in or sprayed with hash oil, then rolled in kief. Though the potency of each batch of Moon Rocks varies and depends on how it’s made/who produces it, the general consensus is that they hover around 50% THC.',
    description2:
      'Moon Rock, also known as “Kurupt’s Moonrock,” is an infamous take on the classic Girl Scout Cookies strain, where the nugs are dipped in hash oil and then rolled in kief. This process supercharges the effects of Moon Rock, giving it a THC level of about 21-26% in total, making it way too strong for inexperienced users. The high hits you hard immediately after you toke, knocking you hard in the head with a cerebral rush that launches your mind into hazy bliss before leaving you completely stoned in mind and body. You’ll be utterly relaxed but totally euphoric as you slip away into a heavy couch-lock and sedation that can easily cause users to fall into a deep and peaceful sleep. Because of these effects and its insanely high THC level, Moon Rock is said to be perfect for treating insomnia, appetite loss, chronic pain, muscle spasms, and cramps. This bud has a unique flavor of earthy nutty hash that has a subtle sweetness to it from the hash oil. The aroma is surprisingly mellow, with a spicy dank overtone that’s accented by sweet earth. Moon Rock buds are round and lumpy, coated in bright kief and dripping with hash oil.',
  } as Product,
  {
    id: 'northern-light',
    name: 'Northern Light',
    photo: 'assets/img/products/northen-light.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      'Northern Lights stands among the most famous strains of all time, a pure indica cherished for its resinous buds, fast flowering, and resilience during growth. Itself a descendant of indigenous Afghani and Thai landrace strains, Northern Lights has given rise to famous hybrids like Shiva Skunk and Super Silver Haze. Rumor has it that Northern Lights first sprouted near Seattle, Washington, but was propagated out of Holland after 1985 at what is now Sensi Seeds.',
    description2:
      'Northern Lights stands among the most famous strains of all time, a pure indica cherished for its resinous buds, fast flowering, and resilience during growth. Itself a descendant of indigenous Afghani and Thai landrace strains, Northern Lights has given rise to famous hybrids like Shiva Skunk and Super Silver Haze. Rumor has it that Northern Lights first sprouted near Seattle, Washington, but was propagated out of Holland after 1985 at what is now Sensi Seeds. Pungently sweet, spicy aromas radiate from the crystal-coated buds, which sometimes reveal themselves in hues of purple. Northern Lights’ psychoactive effects settle in firmly throughout the body, relaxing muscles and pacifying the mind in dreamy euphoria. Comfortable laziness allows patients to relieve pain and sleeplessness, while its mellow contentment roots out depression and stress. Several different Northern Lights phenotypes circulate the market, but Sensi Seeds recommends a general indoor flowering time of 45 to 50 days.',
  } as Product,
  {
    id: 'northern-fiore',
    name: 'Northern Fiore',
    photo: 'assets/img/products/northern-fiore.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 270 },
      { unit: Unit.two, amount: 550 },
      { unit: Unit.three, amount: 1000 },
      { unit: Unit.four, amount: 1500 },
    ],
    description1:
      'Northern Fiore is a truly exceptional strain. Experience heightened flavor and euphoria when you consume this Sherber/Girl Scout Cookies cross! Bred by Vegan Buddha, this is a one of a kind strain that rivals any strain coming out of the Souther California scene. This hybrid packs a punch and its effects are long lasting.',
    description2:
      'Northern Fiore is a truly exceptional strain. Experience heightened flavor and euphoria when you consume this Sherber/Girl Scout Cookies cross! Bred by Vegan Buddha, this is a one of a kind strain that rivals any strain coming out of the Souther California scene. This hybrid packs a punch and its effects are long lasting.',
  } as Product,
  {
    id: 'og-kush',
    name: 'OG kush',
    photo: 'assets/img/products/og-kush.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      'OG Kush makes up the genetic backbone of West Coast cannabis varieties, but in spite of its ubiquity, its genetic origins remain a mystery. This famed strain arrived in Los Angeles in 1995 after being transplant coast-to-coast from Florida by its original propagators (now known as Imperial Genetics), along with “The Bubba,” which gave way to Bubba Kush. There are many different phenotypes of OG Kush, some of which include Tahoe OG, SFV OG, Ghost OG, and Diablo OG.',
    description2:
      'OG Kush makes up the genetic backbone of West Coast cannabis varieties, but in spite of its ubiquity, its genetic origins remain a mystery. This famed strain arrived in Los Angeles in 1995 after being transplant coast-to-coast from Florida by its original propagators (now known as Imperial Genetics), along with “The Bubba,” which gave way to Bubba Kush. There are many different phenotypes of OG Kush, some of which include Tahoe OG, SFV OG, Ghost OG, and Diablo OG. OG Kush is cherished for its ability to crush stress under the weight of its heavy euphoria. It carries an earthy pine and sour lemon scent with woody undertones, an aroma that has become the signature of OG Kush varieties and descendants.',
  } as Product,
  {
    id: 'pebbles',
    name: 'Pebbles',
    photo: 'assets/img/products/pebbles.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      'Strains going by the name Fruity Pebbles have circulated since at least 2006, particularly in dispensaries in California. These strains are so named for smelling just like their namesake cereal. Although most are labeled as a hybrids or as slightly Indica-dominant, the true genetics of Fruity Pebbles may be impossible to discern, as individual growers may use different parent strains or breeding techniques. THC composition of strains labeled Fruity Pebbles have tested anywhere from 15% to 28%.',
    description2:
      'Strains going by the name Fruity Pebbles have circulated since at least 2006, particularly in dispensaries in California. These strains are so named for smelling just like their namesake cereal. Although most are labeled as a hybrids or as slightly Indica-dominant, the true genetics of Fruity Pebbles may be impossible to discern, as individual growers may use different parent strains or breeding techniques. THC composition of strains labeled Fruity Pebbles have tested anywhere from 15% to 28%. One variety, created by breeders Alien Genetics, was marketed as Fruity Pebbles OG, an April 2012 limited edition. Packs of these special Fruity Pebbles OG seeds sold for $1,000-$1,500 each. The mother, a cross of Green Ribbon and Granddaddy Purps, was bred with a strain crossed from Tahoe OG and Alien Kush. Given that successful growers can reap anywhere from $1,500 to $3,000 per plant, a pack of these specialty seeds may substantially cut into profit margins for commercial growers -- and would certainly be a sunk cost for the more',
  } as Product,
  {
    id: 'pineapple-express',
    name: 'Pineapple Express',
    photo: 'assets/img/products/pineapple-express.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      'Pineapple Express combines the potent and flavorful forces of parent strains Trainwreck and Hawaiian. The smell is likened to fresh apple and mango, with a taste of pineapple, pine, and cedar. This hard-hitting sativa-dominant hybrid provides a long-lasting energetic buzz perfect for productive afternoons and creative escapes',
    description2:
      'Pineapple Express combines the potent and flavorful forces of parent strains Trainwreck and Hawaiian. The smell is likened to fresh apple and mango, with a taste of pineapple, pine, and cedar. This hard-hitting sativa-dominant hybrid provides a long-lasting energetic buzz perfect for productive afternoons and creative escapes',
  } as Product,
  {
    id: 'plushberry',
    name: 'Plushberry',
    photo: 'assets/img/products/plushberry.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      'Pineapple Express combines the potent and flavorful forces of parent strains Trainwreck and Hawaiian. The smell is likened to fresh apple and mango, with a taste of pineapple, pine, and cedar. This hard-hitting sativa-dominant hybrid provides a long-lasting energetic buzz perfect for productive afternoons and creative escapes',
    description2:
      'Pineapple Express combines the potent and flavorful forces of parent strains Trainwreck and Hawaiian. The smell is likened to fresh apple and mango, with a taste of pineapple, pine, and cedar. This hard-hitting sativa-dominant hybrid provides a long-lasting energetic buzz perfect for productive afternoons and creative escapes',
  } as Product,
  {
    id: 'purple-dream',
    name: 'Purple Dream',
    photo: 'assets/img/products/purple-dream.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      'Purple Dream is the mild child of Granddaddy Purple and Blue Dream. Featuring a strong sour grape smell and musty taste, this hybrid is slightly indica dominant. Purple Dream provides users with a relaxing tingly body sensation and has moderate head-heavy effects. It allows patients to function yet acts as a gentle sedative. This strain is great for those suffering from pain or who just need help winding down.',
    description2:
      'Like floating on a cloud in a sea of possibilities, Purple Dream has a way of taking you on a vacation right in your own living room. Unknown breeders have created this well-balanced 50/50 hybrid strain by crossing Granddaddy Purple and Blue Dream, with some variations on the market claiming to be a mix of Blue Dream and Purple Kush. With a delightful scent and effects that take you to la-la land, Purple Dream is loved by many. A strain that’s rather moderate when it comes to THC levels, Purple Dream tends to stay within a 12% to 15% level. Don’t take that for granted though; she can still get you plenty high. Nugs of this dreamy bud are quite dark with a furry coating of orange pistils and sparkly trichomes. Both the taste and smell are incredible, with notes of flowers and pine accented by grape and blueberry. If you’ve never much liked the scent of any other strain before, this could be the one that steals your heart. Aptly named, Purple Dream sends users into a relaxed and happy place that feels creative and free without being too out of it. It takes a bit before you start to notice the effects, but soon you’ll notice that your worries are gone, you’re more alert, and you’re bordering on euphoria. You may find the inspiration to take on a new art project, or you could be chill enough to want to meditate and simply sink into the feelings of bliss. Used by medicinal cannabis patients as a sedative, it’s strong enough to take the edge off of pain and nausea without rendering you useless. Popular as an antidepressant, individuals with extreme stress or negative thoughts will appreciate how easily Purple Dream puts them into a happy state of mind.',
  } as Product,
  {
    id: 'rainbow',
    name: 'Rainbow',
    photo: 'assets/img/products/rainbow.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      'Rainbow is a 50/50 indica/sativa hybrid from Spanish breeders Lifetime Seeds, created by crossing Dancehall with Blueberry. A compact, fast flowering strain with little side-branching, it does very well when grown in the “sea-of-green” style. Rainbow presents a wide array of colors towards the end of flowering, hence the moniker. With a spicy-sweet fruity flavor, this tasty hybrid can give consumers a pleasant, creative high and pain relief without a heavy body sensation.',
    description2:
      'Rainbow Kush is a famous strain due to its multiple colors and the pine aroma. People can find it at dispensaries as simply Rainbow. A 50/50 balanced or slightly Indica-dominant strain, Rainbow Kush has slightly above average THC at 17 percent and average CBD of 1 percent. Several breeders have attempted to perfect this strain. Dutch growers, Amsterdam Marijuana Seeds (AMS), state that they achieved their version of the Rainbow Kush strain by crossing Master Kush and Hindu Kush. Lifetime Seeds from Spain created theirs by crossing Dancehall with Blueberry. When you go to purchase this strain, you might be lured by marketing claims by the breeder, “It’s the most colorful strain ever invented in looks and flavor.” If you look at images on websites or magazines, you will definitely find pictures of rainbow colored cannabis, and those pictures are amazing. However, in real life, this bud may not look like those enhanced images or measure up to the marketing claims. What you will find is cannabis that does look different than other strains.',
  } as Product,
  {
    id: 'runtz',
    name: 'Runtz',
    photo: 'assets/img/products/runtz.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 270 },
      { unit: Unit.two, amount: 550 },
      { unit: Unit.three, amount: 1000 },
      { unit: Unit.four, amount: 1500 },
    ],
    description1:
      'A cross between Zkittlez and Gelato, Runtz derives its name from both its colorful appearance and its flavor profile that’s sugary-sweet. When you lay your eyes on a well-cultivated batch of Runtz buds, you’ll be able to pick out colors beyond green such as various hues of purples and blues, along with orange pistils and shades of greens in between.',
    description2:
      'There are a few phenotypes of Runtz out there so it’s possible to find either a sativa-dominant or indica-dominant strain of Runtz. THC levels can vary as well because of this, so be sure to check the label before firing up this strain. Reviewers have reported Runtz ability to create a high that’s both euphoric and relaxing, so effects are often felt in both the head and body. Anxiety may recede along with stress, and bodily ailments such as mild aches may find relief with this strain. Runtz is a rare strain find, so not much is known to-date about this strain in regards to its THC and CBD content. However, reviewers enjoy its sweet, fruity, and candy-like scent and taste as well as its spectrum of color. If you come across Runtz in your local dispensary and decide to pick some up, after you give it a try create your own review and share your experience with others.',
  } as Product,
  {
    id: 'sativa-seeds',
    name: 'Sativa Seeds',
    photo: 'assets/img/products/sativa-seed.jpg',
    category: 'seed',
    prices: [
      { unit: '10 seeds', amount: 170 },
      { unit: '20 seeds', amount: 220 },
      { unit: '50 seeds', amount: 500 },
      { unit: '100 seeds', amount: 1400 },
    ],
    description1:
      'Best Sativa seeds available here for sale. Although known for producing well outdoors, Sativa seeds are equally suited to indoor gardens where space is slightly more limited. Our seeds offer a range of pure, hybrid and autoflowering varieties, stabilised for all environments. They’re available in both regular and feminized.',
    description2:
      'Best Sativa seeds available here for sale. Sativa strains are best characterised by their soaring, cerebral highs, long thin fan leafs and taller plant structure. They’re a favourite amongst growers looking for a daytime smoke as the Higher THC to CBD ratio gives an uplifting energetic feeling rather than the stereotypical stoned, body buzz associated with Indica strains. Originating in the sub-continent, Cannabis Sativa hails from the warmer climate of Central America and more tropical regions, thanks in part to the longer sunlight hours. It’s here that the vast majority of our base breeding strains originate, and from where we are able to develop some of the best sativa seeds available.',
  } as Product,
  {
    id: 'hybrid-seeds',
    name: 'Hybrid Seeds',
    photo: 'assets/img/products/seed-pack.jpg',
    category: 'seed',
    prices: [
      { unit: '10 seeds', amount: 170 },
      { unit: '20 seeds', amount: 220 },
      { unit: '50 seeds', amount: 500 },
      { unit: '100 seeds', amount: 1400 },
    ],
    description1:
      'Best Sativa seeds available here for sale. Although known for producing well outdoors, Sativa seeds are equally suited to indoor gardens where space is slightly more limited. Our seeds offer a range of pure, hybrid and autoflowering varieties, stabilised for all environments. They’re available in both regular and feminized.',
    description2:
      'Best Sativa seeds available here for sale. Sativa strains are best characterised by their soaring, cerebral highs, long thin fan leafs and taller plant structure. They’re a favourite amongst growers looking for a daytime smoke as the Higher THC to CBD ratio gives an uplifting energetic feeling rather than the stereotypical stoned, body buzz associated with Indica strains. Originating in the sub-continent, Cannabis Sativa hails from the warmer climate of Central America and more tropical regions, thanks in part to the longer sunlight hours. It’s here that the vast majority of our base breeding strains originate, and from where we are able to develop some of the best sativa seeds available.',
  } as Product,
  {
    id: 'sour-diesel',
    name: 'sour-diesel',
    photo: 'assets/img/products/sour-diesel.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      "Sour Diesel, sometimes called Sour D, is an invigorating sativa-dominant strain named after its pungent, diesel-like aroma. This fast-acting strain delivers energizing, dreamy cerebral effects that have pushed Sour Diesel to its legendary status. Stress, pain, and depression fade away in long-lasting relief that makes Sour Diesel a top choice among medical patients. This strain took root in the early 90's, and it is believed to have descended from Chemdawg 91 and Super Skunk.",
    description2:
      "Sour Diesel, sometimes called Sour D, is an invigorating sativa-dominant strain named after its pungent, diesel-like aroma. This fast-acting strain delivers energizing, dreamy cerebral effects that have pushed Sour Diesel to its legendary status. Stress, pain, and depression fade away in long-lasting relief that makes Sour Diesel a top choice among medical patients. This strain took root in the early 90's, and it is believed to have descended from Chemdawg 91 and Super Skunk.",
  } as Product,
  {
    id: 'strawberry-diesel',
    name: 'Strawberry Diesel',
    photo: 'assets/img/products/strewberry-diesel.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      'The Strawberry Diesel marijuana strain is a sativa-dominant hybrid covered in orange hairs with an intense odor and trichome-covered nugs. The Strawberry Diesel high is intense and long-lasting, and is not recommended for complex tasks.',
    description2:
      'The Strawberry Diesel marijuana strain is a sativa-dominant hybrid covered in orange hairs with an intense odor and trichome-covered nugs. The Strawberry Diesel high is intense and long-lasting, and is not recommended for complex tasks.',
  } as Product,
  {
    id: 'white-widow',
    name: 'White Widow',
    photo: 'assets/img/products/white-widow.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      'White Widow is a staple sativa-dominant hybrid with powerful energizing effects. It was produced by Dutch veterans Green House Seeds in the 1990s as a cross between Brazilian indica and South Indian sativa landraces. At the time, the underground cannabis market consisted mostly of early hybrids like Northern Lights and Haze, but White Widow has since joined the ranks of these legendary strains, winning an early High Times Cannabis Cup in 1995 and several awards since. Bred specifically for a high trichome count, White Widow is especially valued in the production of hash. This strain has an average THC composition of 20%, with some phenotypes exceeding that amount.',
    description2:
      'Legendary for its off-the-charts resin production, White Widow is a staple sativa-dominant hybrid with powerful energizing effects. It was produced by Dutch veterans Green House Seeds in the 1990s as a cross between Brazilian indica and South Indian sativa landraces. At the time, the underground cannabis market consisted mostly of early hybrids like Northern Lights and Haze, but White Widow has since joined the ranks of these legendary strains, winning an early High Times Cannabis Cup in 1995 and several awards since. Bred specifically for a high trichome count, White Widow is especially valued in the production of hash. This strain has an average THC composition of 20%, with some phenotypes exceeding that amount. Buds of White Widow are chunky and somewhat conical and tapered. The bud structure of the flowers are more sativa than indica, with a loose and fluffy texture that can be broken up somewhat easily despite its stickiness. The leaves are spring green with few visible pistils. When grown successfully, buds are entirely covered in long-stalked trichomes, lending the whitish-gray appearance that gives the strain its memorable name. White Widow is known for having a stinging, ammonia-like scent with some hints of earthy pine. Breaking buds open gives off a more hashy, incense-like odor. The smooth smoke tastes similarly earthy -- users accustomed to fruity or tasty crossbreeds may be disappointed by White Widow’s relative lack of flavor. That said, White Widow is especially pungent when combusted, so smokers worried about discretion should plan accordingly. What this strain lacks in flavor profile, it makes up for in quick-acting cerebral effects. Users can become more acutely perceptive of their surroundings, tuned into sounds and patterns that may have gone unnoticed before. Enthusiasts also describe an almost immediate uplift in mood and an energy and focus that can applied to either mundane tasks like cleaning or more complex problem-solving processes. White Widow can also be creatively valuable, inducing a kind of rapid-fire thought association that can open up some previously unexplored territory. Psychedelic effects like visual distortion and increased perception can amplify the impact of music or art, while a very mild body buzz mellows users out. Because of its deeply cerebral effects, this strain is typically more psychologically than physically helpful. It can aid those with attention deficit disorders in sustaining focus on a single topic. It can also boost energy in cases of fatigue or depression. Some users have even described White Widow as efficient in relieving migraines.',
  } as Product,
  {
    id: 'vaping-1',
    name: 'Vape Pen 1',
    photo: 'assets/img/products/vaping-1.jpg',
    category: 'vape_pen',
    prices: [
      { unit: '500mg Sativa C-Cell Cartridge', amount: 40 },
      { unit: '500mg Indica C-Cell Cartridge', amount: 40 },
      { unit: '1000mg Hybrid C-Cell Cartridge', amount: 70 },
      { unit: '1000mg Indica C-Cell Cartridge', amount: 70 },
      { unit: '1000mg Hybrid C-Cell Cartridge', amount: 70 },
    ],
    description1:
      'The only place to buy verified CBD vape oil online. 100% organic, Non-GMO, pesticides free, certified and proudly made in the USA. Free worldwide shipping!',
    description2:
      'The only place to buy verified CBD vape oil online. 100% organic, Non-GMO, pesticides free, certified and proudly made in the USA. Free worldwide shipping!',
  } as Product,
  {
    id: 'vaping-2',
    name: 'Vape Pen 2',
    photo: 'assets/img/products/vaping-2.jpg',
    category: 'vape_pen',
    prices: [
      { unit: '500mg Sativa C-Cell Cartridge', amount: 40 },
      { unit: '500mg Indica C-Cell Cartridge', amount: 40 },
      { unit: '1000mg Hybrid C-Cell Cartridge', amount: 70 },
      { unit: '1000mg Indica C-Cell Cartridge', amount: 70 },
      { unit: '1000mg Hybrid C-Cell Cartridge', amount: 70 },
    ],
    description1:
      'The only place to buy verified CBD vape oil online. 100% organic, Non-GMO, pesticides free, certified and proudly made in the USA. Free worldwide shipping!',
    description2:
      'The only place to buy verified CBD vape oil online. 100% organic, Non-GMO, pesticides free, certified and proudly made in the USA. Free worldwide shipping!',
  } as Product,
  {
    id: 'bubba-shatter',
    name: 'Bubba Shatter',
    photo: 'assets/img/products/bubba-shatter.jpg',
    category: 'concentrate',
    prices: [
      { unit: '07g', amount: 119 },
      { unit: '14g', amount: 238 },
      { unit: '28g', amount: 476 },
      { unit: '56g', amount: 952 },
      { unit: '224g', amount: 3808 },
    ],
    description1:
      'Bubba Kush shatter is an indica strain shatter that has gained notoriety in the U.S. and beyond for its heavy tranquilizing effects. Sweet hashish flavors with subtle notes of chocolate and coffee come through on the exhale, delighting the palate as powerful relaxation takes over. From head to toe, muscles ease with heaviness as dreamy euphoria blankets the mind, crushing stress while coercing happy moods. Bubba Kush exhibits a distinctive, bulky bud structure with hues that range from forest green to pale purple.',
    description2: 'Quantity:	 07g, 14g, 28g, 56g, 224g',
  } as Product,
  {
    id: 'cannabis-cherry',
    name: 'Cannabis Cherry',
    photo: 'assets/img/products/cannabis-cherry.jpg',
    category: 'concentrate',
    prices: [
      { unit: '05g', amount: 240 },
      { unit: '10g', amount: 470 },
      { unit: '15g', amount: 820 },
      { unit: '20g', amount: 1470 },
    ],
    description1:
      "Cherry Pie's parents are Granddaddy Purple and Durban Poison. With buds that are dense and full of orange hairs and a touch of purple, this strain smells of sweet and sour cherry pie. The effects have been known to come on in minutes and stick around for a couple hours.",
    description2: 'Quantity:	 5g, 10g, 15g, 20g',
  } as Product,
  {
    id: 'dry-sift-hash',
    name: 'Dry Sift Hash',
    photo: 'assets/img/products/dry-sift-hash.jpg',
    category: 'concentrate',
    prices: [
      { unit: '05g', amount: 240 },
      { unit: '10g', amount: 470 },
      { unit: '15g', amount: 820 },
      { unit: '20g', amount: 1470 },
    ],
    description1:
      'Dry sift is a form of hash, like kief, that’s named after the process used to make it. It’s a hands-on, craft approach to separating the trichome heads from the plant material. The dry sift technique uses screens with extremely fine mesh to hand-sift the dried flowers or trim, removing the resinous glands and refining the extract into a granular consistency. High-quality dry sift is appreciated for its artisanal process and revered for its terpene profile, potency, and its ability to melt and vaporize completely.',
    description2: 'Quantity:	 5g, 10g, 15g, 20g',
  } as Product,
  {
    id: 'bho',
    name: 'Butane Hash Oil',
    photo: 'assets/img/products/hash-bho.jpg',
    category: 'concentrate',
    prices: [
      { unit: '05g', amount: 240 },
      { unit: '10g', amount: 470 },
      { unit: '15g', amount: 820 },
      { unit: '20g', amount: 1470 },
    ],
    description1:
      'BHO is a strong concentrate of cannabinoids that is obtained by immersing the cannabis plant in a solvent, normally butane leaving a stick and resinous liquid after the extraction process. It has a high concentration of THC going up to 80% and is also referred to as honey oil, earwax or shatter, depending on the mode of production. Butane hash oil can be smoked, vaporized directly or ingested by mixing it with other edible products. BHO can be used to treat chronic pain.',
    description2: 'Quantity:	 5g, 10g, 15g, 20g',
  } as Product,
  {
    id: 'og-kush-shatter',
    name: 'OG Kush Shatter',
    photo: 'assets/img/products/og-kush-shatter.jpg',
    category: 'concentrate',
    prices: [
      { unit: '05g', amount: 240 },
      { unit: '10g', amount: 470 },
      { unit: '15g', amount: 820 },
      { unit: '20g', amount: 1470 },
    ],
    description1:
      'OG Kush Shatter is made from the highest quality OG Kush cannabis in Canada. This hybrid strain of cannabis has lineage linking back to Chemdawg and Hindu Kush offering many benefits to medical patients and recreational consumers alike. OG Kush is known for causing the munchies and for providing intensive relief from pain, depression and anxiety. OG Kush Shatter can be enjoyed within any of your preferred dabbing devices.',
    description2: 'Quantity:	 5g, 10g, 15g, 20g',
  } as Product,
  {
    id: 'royal-kush-wax',
    name: 'Royal Kush Wax',
    photo: 'assets/img/products/royal-kush-wax.jpg',
    category: 'concentrate',
    prices: [
      { unit: '05g', amount: 240 },
      { unit: '10g', amount: 470 },
      { unit: '15g', amount: 820 },
      { unit: '20g', amount: 1470 },
    ],
    description1:
      'Royal Kush wax is a king among hybrid waxes, delivering powerful trance-like effects with an earthy, skunky aroma. This balanced hybrid descends from the renowned line of Afghani and Skunk #1, two strains that have gained legendary status among cannabis breeders. Royal Kush’s happy, euphoric relaxation branches out in full-body effects that later ease into deep restfulness conducive for sleep. Patients treating stress, pain, and nausea can benefit from Royal Kush’s potent relief, but less seasoned consumers should take caution with this hard-hitter. This strain has a unique coverage of white pistil hairs, and growers are recommended an 8 to 13 week flowering time for their indoor Royal Kush plants.',
    description2: 'Quantity:	 5g, 10g, 15g, 20g',
  } as Product,
  {
    id: 'chronic-carts',
    name: 'Chronic Carts',
    photo: 'assets/img/products/chronic-dank.jpg',
    category: 'vape_pen',
    prices: [{ unit: '5 Cart', amount: 120 }],
    description1:
      'Pre-filled THC Chronic Carts Vape Cartridges are filled with your liquid gold concentrate so you don’t have to worry about refilling. All you have to do is attach them to a rechargeable / reusable vape pen, which can also be purchased from your favorite online vape shop',
    description2:
      'FLAVORS: Sherbet, Chocolope, Green Ribbon, Orange Sherbet. Lemonade, OG Kush, Jack Herer, Green Crack, Miami Haze, XXX OG, Mimosa, Gelato, Super Sour Diesel, Wedding Cake, King Louis XIII, Blue Cookies, Pistachio, etc',
  } as Product,
  {
    id: 'dank-vape',
    name: 'Dank Vapes',
    photo: 'assets/img/products/dankvapes.jpg',
    category: 'vape_pen',
    prices: [{ unit: '5 Cart', amount: 100 }],
    description1:
      'Dank-Vapes oil is a 100% solvent-free cannabis concentrate, unmatched in its potency, purity, and flavor. Dank-Vape is a translucent oil, anywhere from 75%-98% THC, and is activated by our specially-developed process to make it effective in oral and trans-dermal applications. Available in Syringe form, and with all-natural flavors and 100% Cannabis derived terpenes, Dank-Vape is setting the standard in medicinal cannabis',
    description2:
      'Dank-Vapes oil is a 100% solvent-free cannabis concentrate, unmatched in its potency, purity, and flavor. Dank-Vape is a translucent oil, anywhere from 75%-98% THC, and is activated by our specially-developed process to make it effective in oral and trans-dermal applications. Available in Syringe form, and with all-natural flavors and 100% Cannabis derived terpenes, Dank-Vape is setting the standard in medicinal cannabis. All Dank-Vapes ingredients are sourced from specific THC of medical grade cannabis and tested at OPPM for any contaminants and residual solvents. Dank-Vape cartridges come prefilled in Special low OHM tanks for optimum discretion and ease of use. Dank-Vape cartridges are Universal for 510 threaded vaporizer pens or e-cigarette batteries. Dank-Vape Cartridges are also disposable, so you don’t have to deal with the hassle of loading and cleaning cartridges. Simply dispose of it after you are finished. Available as Half and Full Gram Cartridges',
  } as Product,
  {
    id: 'dankwood',
    name: 'Dankwoods',
    photo: 'assets/img/products/dankwood.jpg',
    category: 'preroll',
    prices: [{ unit: '5 blunts', amount: 180 }],
    description1:
      'Dankwoods products are made from an all natural Meduro backwood leaf wrapped around 2 grams of all organic fire bud, with a quarter gram of concentrate made from nugs, rolled in kief with a custom made reusable quartz filter. Everything was grown in Los Angeles using only the finest materials.',
    description2:
      'Dankwoods products are made from an all natural Meduro backwood leaf wrapped around 2 grams of all organic fire bud, with a quarter gram of concentrate made from nugs, rolled in kief with a custom made reusable quartz filter. Everything was grown in Los Angeles using only the finest materials. Here at Dankwoods, we are all about quality product, love for our employees, and patients. We strive day and night to create a clean, handcrafted, locally sourced product that brings an enjoyable experience to all that partake. All live locally and everything but the backwoods leaf is grown locally and made in the USA. This allows us to always support our local Angelinos and give back to the community while creating a new and fun way to enjoy cannabis.',
  } as Product,
  {
    id: 'kingpen',
    name: 'Kingpen Carts',
    photo: 'assets/img/products/kingpen.jpg',
    category: 'vape_pen',
    prices: [{ unit: '5 Cart', amount: 110 }],
    description1:
      'The world most awarded cannabis vape. Kingpen oil is made in our own state-of-the-art manufacturing lab. It is distilled 5 times producing a high quality product that passes strict qualitative and quantitative tests. No PG, VG, PEG or other additives. Just the highest quality vape cartridges for the highest quality high.',
    description2:
      'The world most awarded cannabis vape. Kingpen oil is made in our own state-of-the-art manufacturing lab. It is distilled 5 times producing a high quality product that passes strict qualitative and quantitative tests. No PG, VG, PEG or other additives. Just the highest quality vape cartridges for the highest quality high. KINGPEN BATTERIES AND CARTRIDGES Our hardware maintains some of the lowest failure rates in the industry and our cartridges are engineered for smooth and consistent airflow. In addition, our pens have multiple voltage levels so you can control your heat settings (low, medium and hot) and feature a pre-heat mode that allows you to heat the oil before you hit.',
  } as Product,
  {
    id: 'orange-shebert',
    name: 'Orange Shebert',
    photo: 'assets/img/products/orange-shebert.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      'Orange Sherbet is a slightly indica dominant hybrid strain that’s a descendant of the super tasty Sunset Sherbet strain and perhaps the line of Orange strains. But don’t go looking for this bud – its rarity makes it a truly difficult strain to find on the medicinal market. Because it is so hard to find, there is very little credible information on Orange Sherbet available.',
    description2:
      'Orange Sherbet is a slightly indica dominant hybrid strain that’s a descendant of the super tasty Sunset Sherbet strain and perhaps the line of Orange strains. But don’t go looking for this bud – its rarity makes it a truly difficult strain to find on the medicinal market. Because it is so hard to find, there is very little credible information on Orange Sherbet available. The Orange Sherbet high is very relaxing and calming in nature, with a slightly euphoric onset that leaves you uplifted and happy. This is accompanied by a body buzz that leaves you completely relaxed with a sense of ease. These effects make Orange Sherbet ideal for treating patients suffering from conditions such as depression, chronic stress or anxiety, and chronic pain. Although the THC and CBD levels of Orange Sherbet are unknown, this bud is said to have a moderate THC level and a low CBD level. Orange Sherbet is said to have a taste of sweet citrus topped with earthy pine and an aroma of sweet citrus earth with a tropical fruitiness that’s released as the nugs are broken apart and smoked. Orange Sherbet buds have long spade-shaped light minty green nugs with lots of thick orange hairs and a coating of tiny amber crystal trichomes.',
  } as Product,
  {
    id: 'packwoods',
    name: 'Packwoods',
    photo: 'assets/img/products/packwoods.jpg',
    category: 'preroll',
    prices: [{ unit: '5 blunts', amount: 250 }],
    description1:
      'Packwoods blunts are filled with two grams of lab-tested, hand broken, premium flower with high potency concentrate, dusted in kief, rolled up in a 100% tobacco free wrap with an engineered glass filter.',
    description2:
      'Packwoods blunts are filled with two grams of lab-tested, hand broken, premium flower with high potency concentrate, dusted in kief, rolled up in a 100% tobacco free wrap with an engineered glass filter.',
  } as Product,
  {
    id: 'platinum-punch',
    name: 'Platinum Punch',
    photo: 'assets/img/products/platinum-punch.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      "Platinum Punch is just as precious as the metal it's named after. With a THC content regularly topping 20%, this indica-dominant strain asserts itself as one of the “heaviest” strains around. Platinum Punch is purported to stem from three strains: Master Kush, OG Kush, and a third unknown parent.",
    description2:
      'Platinum Punch is a cross of Platinum x Purple Punch. Platinum is Hashplant x Perma Frost. Sheep a lot to the table like shorter flower periods stays short and bushy, adds tons of bag appeal and is highly resist to mould. Paired up with the Purple Punch and you get a flavoured combo. Sure to please any grower. This very easy to grow variety performs well both indoor and out. Expect tropical flavours and the crazy frost that adds to the end of flower. Purple stems are normal on this cross and were inherited from the Platinum.',
  } as Product,
  {
    id: 'propens',
    name: 'Propen Cartridges',
    photo: 'assets/img/products/propens.jpg',
    category: 'vape_pen',
    prices: [{ unit: '5 Cart', amount: 100 }],
    description1:
      'Dozens of companies are having great success with our ProPen CBD line-up, but if it doesn’t fit your campaign we can create something that fully accommodates. We cover vast array of CBD services from inception to the final retail sale. Regardless of your CBD requirements we’ve got you covered!',
    description2:
      'Dozens of companies are having great success with our ProPen CBD line-up, but if it doesn’t fit your campaign we can create something that fully accommodates. We cover vast array of CBD services from inception to the final retail sale. Regardless of your CBD requirements we’ve got you covered!',
  } as Product,
  {
    id: 'white-runtz',
    name: 'White Runtz',
    photo: 'assets/img/products/white-runtz.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 270 },
      { unit: Unit.two, amount: 550 },
      { unit: Unit.three, amount: 1000 },
      { unit: Unit.four, amount: 1500 },
    ],
    description1:
      'A cross between Zkittlez and Gelato, White Runtz derives its name from both its colorful appearance and its flavor profile that’s sugary-sweet. When you lay your eyes on a well-cultivated batch of Runtz buds, you’ll be able to pick out colors beyond green such as various hues of purples and blues, along with orange pistils and shades of greens in between.',
    description2:
      'There are a few phenotypes of white Runtz out there so it’s possible to find either a sativa-dominant or indica-dominant strain of Runtz. THC levels can vary as well because of this, so be sure to check the label before firing up this strain. Reviewers have reported Runtz ability to create a high that’s both euphoric and relaxing, so effects are often felt in both the head and body. Anxiety may recede along with stress, and bodily ailments such as mild aches may find relief with this strain. Runtz is a rare strain find, so not much is known to-date about this strain in regards to its THC and CBD content. However, reviewers enjoy its sweet, fruity, and candy-like scent and taste as well as its spectrum of color. If you come across Runtz in your local dispensary and decide to pick some up, after you give it a try create your own review and share your experience with others.',
  } as Product,
  {
    id: 'zkittlez',
    name: 'Zkittlez',
    photo: 'assets/img/products/zkittlez.jpg',
    category: 'strain',
    prices: [
      { unit: Unit.one, amount: 160 },
      { unit: Unit.two, amount: 260 },
      { unit: Unit.three, amount: 662 },
      { unit: Unit.four, amount: 962 },
      { unit: Unit.five, amount: 1862 },
    ],
    description1:
      'Zkittlez is an indica-dominant mix of Grape Ape and Grapefruit that is crossed with another undisclosed strain to produce this candy-flavored cannabis bred by 3rd Gen Family and Terp Hogz. This award-winning combination took 1st Place at the 2016 Emerald Cup and 1st Place Indica at the 2015 Cannabis Cups in San Francisco and in Michigan. The chunky colas explode in a spectrum of light green hues and emit a sweet, tropical blend of fruit flavors. The effects of Zkittlez are surprisingly uplifting for an indica, leaving consumers focused, alert, and happy while relaxing the body to help unwind any time of day.',
    description2:
      'Zkittlez, sometimes also spelled Skittlez or just Skittles, is an indica-dominant hybrid that erupts with fruit flavor. The creation of Northern California-based collective Dying Breed Seeds, this strain is descended from fruity indica favorite Grape Ape and tangy sativa Grapefruit. Skittles combines the mental and physical effects of both parent strains to yield a smooth, multifaceted high. This bud’s appeal was strong enough to earn the title of Best Indica at the 2015 High Times Cannabis Cup held in Michigan. Zkittlez’s THC content has been measured at between 15% and 23%. Like its namesake, this strain offers you the opportunity to taste the rainbow -- but as it turns out Zkittlez lets you see a rainbow too. Depending on phenotype, the plant’s thick and chunky flowers appear in a variety of greens and purples, with vibrant orange hairs (or pistils) sprinkled throughout. The eye-catching purple hues are the result of high concentrations of anthocyanin pigments. The trimmed buds have a characteristically indica structure, tight and densely-packed, with smallish leaves. Finally, a dusting of cloudy white trichomes ensures both stickiness and psychoactivity. Its aroma is where Zkittlez really shines. When properly cured, Zkittlez’s flowers give off a kind of sweet-sour funk. A second whiff reveals slightly more distinct notes of berry and lemon. Grinding up the flowers intensifies the strain’s more sour notes, resulting in a kind of skunky character. When combusted in a pipe or joint, the flowers burn with a very pleasant and easily-inhaled smoke. On the exhale, this light smoke tastes fruity and grape-like. Notably, any detectable grape flavors are coincidental to the strain’s purple coloring; this is because the plant’s color are determined by pigmentation., while its flavor profile is determined by terpenes.',
  } as Product,
  {
    id: 'sour-zkittlez',
    name: 'Sour Zkittlez Shatter',
    photo: 'assets/img/products/sour-zkittlez.jpg',
    category: 'concentrate',
    prices: [{ unit: '3000mg', amount: 155 }],
    description2:
      'Sour zkittlez is a new strain developed by one of the most experienced breeders in our company. We are very proud to release this strain. It has the sweet zkittles flavour that you are used to from our zkittlez but with the sour diesel flavour added to it, it is by far one of the best things that we have tasted in the last couple of years. The feeling you get from this strain is a mix of being high and stoned at the same time. This plant grows slim, with about 9 sidebranches and a good yield. We did a test grow with 9 plants on a square meter and that seemed to be perfect. Indica 40% Sativa 60% THC 24-27%',
    description1:
      'The sour zkittlez variety has all the goodness of regular Zkittlez with the addition of sour diesel. This is a relatively new strain. Sour Zkittlez has a darker color with more brown hairs and purple hues than Zkittles. This sativa dominant strain will leave you high and stoned.',
  } as Product,

  //rove collection

  {
    id: 'ape',
    name: 'Rove Ape | INDICA Cartridge',
    photo: 'assets/img/rove/ape.jpg',
    category: 'rove',
    prices: [
      { unit: Unit.cartridgeHalf, amount: 45 },
      { unit: Unit.cartridgeFull, amount: 50 },
    ],
    description1:
      'Rove Ape Cartridge is a cross between Mendocino Purps, Skunk, and Afghani. This indica combines dark berry notes accented with a distinct grape-like aroma. It provides great taste and carefree relaxation that can help soothe pain, stress, and anxiety.',
    description2: 'Available as Half and Full Gram Cartridges',
  } as Product,
  {
    id: 'cookies',
    name: 'Rove Cookies | HYBRID Cartridge',
    photo: 'assets/img/rove/cookies.jpg',
    category: 'rove',
    prices: [
      { unit: Unit.cartridgeHalf, amount: 45 },
      { unit: Unit.cartridgeFull, amount: 50 },
    ],
    description1:
      'Buy Rove Cookies Cartridge. Each puff of this relaxing indica dominant hybrid should bring relief to both body and mind. Our blend promotes a sense of well-being to enhance both active and meditative lifestyles. Its pleasant sweetness, a likely influence for its name, is accompanied by subtle notes of citrus and fruit for a truly modern cannabis taste.',
    description2: 'Available as Half and Full Gram Cartridges',
  } as Product,
  {
    id: 'dream',
    name: 'Rove Dream | HYBRID Cartridge',
    photo: 'assets/img/rove/dream.jpg',
    category: 'rove',
    prices: [
      { unit: Unit.cartridgeHalf, amount: 45 },
      { unit: Unit.cartridgeFull, amount: 50 },
    ],
    description1:
      'Buy Rove Dream Cartridge. This Blue Dream, Strawberry Cough cross is a sativa dominant hybrid. It balances full-body relaxation with gentle cerebral invigoration. With a sweet strawberry aroma, it delivers swift symptom relief without heavy sedative effects. The high THC content will awaken your senses and may relieve symptoms of pain, depression, and nausea.',
    description2: 'Available as Half and Full Gram Cartridges',
  } as Product,
  {
    id: 'glue',
    name: 'Rove Glue | HYBRID Cartridge',
    photo: 'assets/img/rove/glue.jpg',
    category: 'rove',
    prices: [
      { unit: Unit.cartridgeHalf, amount: 45 },
      { unit: Unit.cartridgeFull, amount: 50 },
    ],
    description1:
      'Buy Rove Glue Cartridge. This Glue blend is a potent hybrid strain that delivers heavy-handed euphoria and relaxation. Its pungent earthy and sour aromas are unique, offering relief from pain or insomnia.',
    description2: 'Available as Half and Full Gram Cartridges',
  } as Product,
  {
    id: 'haze',
    name: 'Rove Haze | SATIVA Cartridge',
    photo: 'assets/img/rove/haze.jpg',
    category: 'rove',
    prices: [
      { unit: Unit.cartridgeHalf, amount: 45 },
      { unit: Unit.cartridgeFull, amount: 50 },
    ],
    description1:
      'Buy Rove Haze Cartridge. Stemming from roots in the high altitude grows of the Santa Cruz Mountains, this truly west coast blend is sativa dominant. It drops a sweet mix of lemon-heavy tropical ﬂavors right on the palate. Bolstered with earthy undertones, its cerebral high provides a high-energy and creative buzz that is sure to bring out the best of a sunny California day.',
    description2: 'Available as Half and Full Gram Cartridges',
  } as Product,
  {
    id: 'kush',
    name: 'Rove Kush | INDICA Cartridge',
    photo: 'assets/img/rove/kush.jpg',
    category: 'rove',
    prices: [
      { unit: Unit.cartridgeHalf, amount: 45 },
      { unit: Unit.cartridgeFull, amount: 50 },
    ],
    description1:
      'Rove Kush Cartridge is also an indica dominant blend, this Kush has fruity tasting notes with a smooth, mellow finish. The overall effect is calming and soothing to help fight stress, muscle spasms, nausea, and pain.',
    description2: 'Available as Half and Full Gram Cartridges',
  } as Product,
  {
    id: 'og',
    name: 'Rove OG | INDICA Cartridge',
    photo: 'assets/img/rove/og.jpg',
    category: 'rove',
    prices: [
      { unit: Unit.cartridgeHalf, amount: 45 },
      { unit: Unit.cartridgeFull, amount: 50 },
    ],
    description1:
      'Buy Rove OG Cartridge. This indica dominant blend is one of our most potent and fastest acting. With hints of earthy pine and a floral sweetness, it is a top nighttime remedy that can provide a heavy body sensation and relief from pain, insomnia, and lack of appetite.',
    description2: 'Available as Half and Full Gram Cartridges',
  } as Product,
  {
    id: 'sherbet',
    name: 'Rove Sherbet | HYBRID Cartridge',
    photo: 'assets/img/rove/sherbet.jpg',
    category: 'rove',
    prices: [
      { unit: Unit.cartridgeHalf, amount: 45 },
      { unit: Unit.cartridgeFull, amount: 50 },
    ],
    description1:
      'Rove Sherbet Cartridge is an indica-leaning hybrid, Sherbet delivers a powerful, heady buzz. The creamy aroma is accented with notes of skunky citrus, berry, and a candy-like sweetness similar to its parent strain, Girl Scout Cookies. Stress, tension, and sour moods melt away with the carefree mindset and physical relaxation that comes with this rich concentrate.',
    description2: 'Available as Half and Full Gram Cartridges',
  } as Product,
  {
    id: 'skywalker',
    name: 'Rove Skywalker | INDICA Cartridge',
    photo: 'assets/img/rove/skywalker.jpg',
    category: 'rove',
    prices: [
      { unit: Unit.cartridgeHalf, amount: 45 },
      { unit: Unit.cartridgeFull, amount: 50 },
    ],
    description1:
      'Rove Skywalker Cartridge is an Indica dominant cross between Blueberry and Mazar, is ideal for those who suffer from mild pain, insomnia, stress or anxiety. Users of this potent strain are treated to an out of this world experience, punctuated by deep body highs and feelings of euphoria. Spread the earth beneath your feet and let the forces guide you.',
    description2: 'Available as Half and Full Gram Cartridges',
  } as Product,
  {
    id: 'tangie',
    name: 'Rove Tangie | SATIVA Cartridge',
    photo: 'assets/img/rove/tangie.jpg',
    category: 'rove',
    prices: [
      { unit: Unit.cartridgeHalf, amount: 45 },
      { unit: Unit.cartridgeFull, amount: 50 },
    ],
    description1:
      'Buy Rove Tangie Cartridge. Euphoria, happiness, and relaxation – these are the states that will slowly inundate your senses. This strain has strong, feel good powers that tingle and motivate. Let your spirit fizzle and your creativity pop as Tangie hits home with sweet citrus notes, bringing out your vibrant side. Color every moment with Tangie!',
    description2: 'Available as Half and Full Gram Cartridges',
  } as Product,
  {
    id: 'waui',
    name: 'Rove Waui | SATIVA Cartridge',
    photo: 'assets/img/rove/waui.jpg',
    category: 'rove',
    prices: [
      { unit: Unit.cartridgeHalf, amount: 45 },
      { unit: Unit.cartridgeFull, amount: 50 },
    ],
    description1:
      'Buy Rove Waui Cartridge. Classic and simple, with its tropical flavors and stress-relieving qualities, Waui is a vacation in every puff. Let the sweet pineapple and high-energy euphoria of this native Hawaiian strain wisp your creative spirit to beautiful places.',
    description2: 'Available as Half and Full Gram Cartridges',
  } as Product,

  //muha-meds collection

  {
    id: 'muha-meds-mojito',
    name: 'Muha Meds Mojito Cartridge',
    photo: 'assets/img/muha-meds/mogito.jpeg',
    category: 'muha_meds',
    prices: [{ unit: 'Full Gram Cartridge', amount: 50 }],
    description1:
      'Buy Muha Meds Mojito Cartridge online. Muha Meds mojito cartridge oil is a 100% solvent-free cannabis concentrate, unmatched in its potency, purity, and flavor. Muha Meds mojito cartridges latest CCELL are equipped with larger chambers and double the entry points, providing quicker effects. muha meds mojito cartridges are made with ceramic heating elements for superior heat control, muha meds mojito cartridges produces flavorful fragrant, smooth vapor for a richer experience. MuhaMeds mogito Vapes comes in both 500mg and 1g cartridges, which last ~150 and ~300 puffs each. Once finished, simply disconnect from the battery unit and dispose. Each 4-second activation yields ~3.5mg of cannabis oil.',
    description2:
      'Muha Meds mojito cartridges come prefilled in Special low OHM tanks for optimum discretion and ease of use. Muha Meds mojito cartridges are Universal for 510 threaded vaporizer pens or e-cigarette batteries. Dank-Vape Cartridges are also disposable, so you don’t have to deal with the hassle of loading and cleaning cartridges. Simply dispose of it after you are finished. Available as Half and Full Gram Cartridges',
  } as Product,
  {
    id: 'muha-meds-cool-aid',
    name: 'Muha Meds Cool Aid Cartridge',
    photo: 'assets/img/muha-meds/cool-aid.jpeg',
    category: 'muha_meds',
    prices: [{ unit: 'Full Gram Cartridge', amount: 50 }],
    description1:
      'Buy Muha Meds Cool Aid Cartridge online. Muha Meds Cool Aid cartridge oil is a 100% solvent-free cannabis concentrate, unmatched in its potency, purity, and flavor. Muha Meds Cool Aid cartridges latest CCELL are equipped with larger chambers and double the entry points, providing quicker effects. muha meds Cool Aid cartridges are made with ceramic heating elements for superior heat control, muha meds Cool Aid cartridges produces a flavorful fragrant, smooth vapor for a richer experience. MuhaMeds Cool Aid Vapes comes in both 500mg and 1g cartridges, which last ~150 and ~300 puffs each. Once finished, simply disconnect from the battery unit and dispose. Each 4-second activation yields ~3.5mg of cannabis oil.',
    description2:
      'Muha Meds Cool Aid cartridges come prefilled in Special low OHM tanks for optimum discretion and ease of use. Muha Meds cartridges are Universal for 510 threaded vaporizer pens or e-cigarette batteries. Dank-Vape Cartridges are also disposable, so you don’t have to deal with the hassle of loading and cleaning cartridges. Simply dispose of it after you are finished. Available as Half and Full Gram Cartridges',
  } as Product,
  {
    id: 'muha-meds-nesquik',
    name: 'Muha Meds Nesquik Cartridge',
    photo: 'assets/img/muha-meds/nesquik.jpeg',
    category: 'muha_meds',
    prices: [{ unit: 'Full Gram Cartridge', amount: 50 }],
    description1:
      'Buy Muha Meds Nesquik Cartridge online. Muha Meds Nesquik cartridge oil is a 100% solvent-free cannabis concentrate, unmatched in its potency, purity, and flavor. Muha Meds Nesquik cartridges CCELL are equipped with larger chambers and double the entry points, providing quicker effects. muha meds Nesquik cartridges are made with ceramic heating elements for superior heat control, muha meds Nesquik cartridges produces a flavorful fragrant, smooth vapor for a richer experience. The MuhaMeds Vape comes in both 500mg and 1g cartridges, which last ~150 and ~300 puffs each. Once finished, simply disconnect from the battery unit and dispose. Each 4-second activation yields ~3.5mg of cannabis oil.',
    description2:
      'Muha Meds Nesquik cartridges come prefilled in Special low OHM tanks for optimum discretion and ease of use. Muha Meds cartridges are Universal for 510 threaded vaporizer pens or e-cigarette batteries. Dank-Vape Cartridges are also disposable, so you don’t have to deal with the hassle of loading and cleaning cartridges. Simply dispose of it after you are finished. Available as Half and Full Gram Cartridges',
  } as Product,
  {
    id: 'muha-meds-orange-bang',
    name: 'Muha Meds Orange Bang Cartridge',
    photo: 'assets/img/muha-meds/orange-bang.jpeg',
    category: 'muha_meds',
    prices: [{ unit: 'Full Gram Cartridge', amount: 50 }],
    description1:
      'Buy Muha Meds Orange Bang Cartridge online. Muha Meds Orange Bang cartridge oil is a 100% solvent-free cannabis concentrate, unmatched in its potency, purity, and flavor. Muha Meds Orange Bang cartridges latest CCELL are equipped with larger chambers and double the entry points, providing quicker effects. muha meds Orange Bang cartridges are made with ceramic heating elements for superior heat control, muha meds Orange Bang cartridges produces a flavorful fragrant, smooth vapor for a richer experience. The MuhaMeds Vape comes in both 500mg and 1g cartridges, which last ~150 and ~300 puffs each. Once finished, simply disconnect from the battery unit and dispose. Each 4-second activation yields ~3.5mg of cannabis oil.',
    description2:
      'Muha Meds Orange Bang cartridges come prefilled in Special low OHM tanks for optimum discretion and ease of use. Muha Meds cartridges are Universal for 510 threaded vaporizer pens or e-cigarette batteries. Dank-Vape Cartridges are also disposable, so you don’t have to deal with the hassle of loading and cleaning cartridges. Simply dispose of it after you are finished. Available as Half and Full Gram Cartridges',
  } as Product,
  {
    id: 'muha-meds-pina-colada',
    name: 'Muha Meds Pina Colada Cartridge',
    photo: 'assets/img/muha-meds/pina-colada.jpeg',
    category: 'muha_meds',
    prices: [{ unit: 'Full Gram Cartridge', amount: 50 }],
    description1:
      'Buy Muha Meds Pina Colada Cartridge online. Muha Meds Pina Colada cartridges oil is a 100% solvent-free cannabis concentrate, unmatched in its potency, purity, and flavor. Muha Meds Pina Colada cartridges latest CCELL are equipped with larger chambers and double the entry points, providing quicker effects. muha meds Pina colada cartridges are made with ceramic heating elements for superior heat control, muha meds Pina Colada cartridges produces a flavorful fragrant, smooth vapor for a richer experience. The MuhaMeds Vape comes in both 500mg and 1g cartridges, which last ~150 and ~300 puffs each. Once finished, simply disconnect from the battery unit and dispose. Each 4-second activation yields ~3.5mg of cannabis oil.',
    description2:
      'Muha Meds Pina Colada cartridges come prefilled in Special low OHM tanks for optimum discretion and ease of use. Muha Meds cartridges are Universal for 510 threaded vaporizer pens or e-cigarette batteries. Dank-Vape Cartridges are also disposable, so you don’t have to deal with the hassle of loading and cleaning cartridges. Simply dispose of it after you are finished. Available as Half and Full Gram Cartridges',
  } as Product,
  {
    id: 'muha-meds-starburst',
    name: 'Muha Meds Starburst Cartridge',
    photo: 'assets/img/muha-meds/starburst.jpeg',
    category: 'muha_meds',
    prices: [{ unit: 'Full Gram Cartridge', amount: 50 }],
    description1:
      'Buy Muha Meds Starburst Cartridge online. Muha Meds Starburst cartridges oil is a 100% solvent-free cannabis concentrate, unmatched in its potency, purity, and flavor. Muha Meds Starburst starburst cartridges latest CCELL are equipped with larger chambers and double the entry points, providing quicker effects. Muha Meds Starburst Cartridges are made with ceramic heating elements for superior heat control, Muha Meds Starburst Cartridges produces a flavorful fragrant, smooth vapor for a richer experience. The MuhaMeds Starburst Vape comes in both 500mg and 1g cartridges, which last ~150 and ~300 puffs each. Once finished, simply disconnect from the battery unit and dispose. Each 4-second activation yields ~3.5mg of cannabis oil.',
    description2:
      'Muha Meds Starburst cartridges come prefilled in Special low OHM tanks for optimum discretion and ease of use. Muha Meds cartridges are Universal for 510 threaded vaporizer pens or e-cigarette batteries. Dank-Vape Cartridges are also disposable, so you don’t have to deal with the hassle of loading and cleaning cartridges. Simply dispose of it after you are finished. Available as Half and Full Gram Cartridges',
  } as Product,
  {
    id: 'muha-meds-strawberry-cough',
    name: 'Muha Meds Strawberry Cough Cartridge',
    photo: 'assets/img/muha-meds/strawberry-cough.jpeg',
    category: 'muha_meds',
    prices: [{ unit: 'Full Gram Cartridge', amount: 50 }],
    description1:
      'Buy Muha Meds Strawberry Cough Cartridge online. Muha Meds Strawberry Cough cartridges oil is a 100% solvent-free cannabis concentrate, unmatched in its potency, purity, and flavor. Muha Meds Strawberry Cough cartridges latest CCELL are equipped with larger chambers and double the entry points, providing quicker effects. Muha meds Strawberry Cough cartridges are Made with ceramic heating elements for superior heat control, muha meds Strawberry Cough cartridges produces a flavorful fragrant, smooth vapor for a richer experience. The MuhaMeds Vape comes in both 500mg and 1g cartridges, which last ~150 and ~300 puffs each. Once finished, simply disconnect from the battery unit and dispose. Each 4-second activation yields ~3.5mg of cannabis oil.',
    description2:
      'Muha Meds Strawberry Cough cartridges come prefilled in Special low OHM tanks for optimum discretion and ease of use. Muha Meds cartridges are Universal for 510 threaded vaporizer pens or e-cigarette batteries. Dank-Vape Cartridges are also disposable, so you don’t have to deal with the hassle of loading and cleaning cartridges. Simply dispose of it after you are finished. Available as Half and Full Gram Cartridges',
  } as Product,
  {
    id: 'muha-meds-watermelon',
    name: 'Muha Meds Watermelon Cartridge',
    photo: 'assets/img/muha-meds/watermelon.jpg',
    category: 'muha_meds',
    prices: [{ unit: 'Full Gram Cartridge', amount: 50 }],
    description1:
      'Buy Muha Meds Watermelon Cartridge online. Muha Meds Watermelon is an 80% indica strain with a high THC content providing a relaxing effect and useful for appetite stimulant and also act as a sleeping agent. muha meds Watermelon cartridge is also reported to provide energetic, uplifting and euphoric feelings. The muha meds watermelon cartridge flavor as it name suggests, is fruity, sweet and earthy with a high yield and potency requiring 55 to 60 days flowering time.',
    description2:
      'Muha Meds Watermelon cartridges come prefilled in Special low OHM tanks for optimum discretion and ease of use. Muha Meds cartridges are Universal for 510 threaded vaporizer pens or e-cigarette batteries. Dank-Vape Cartridges are also disposable, so you don’t have to deal with the hassle of loading and cleaning cartridges. Simply dispose of it after you are finished. Available as Half and Full Gram Cartridges',
  } as Product,
  {
    id: 'muha-meds-wifi-og',
    name: 'Muha Meds Wifi OG Cartridge',
    photo: 'assets/img/muha-meds/wifi-og.jpeg',
    category: 'muha_meds',
    prices: [{ unit: 'Full Gram Cartridge', amount: 50 }],
    description1:
      'Buy Muha Meds Wifi OG Cartridge online. Muha Meds Wifi OG cartridges oil is a 100% solvent-free cannabis concentrate, unmatched in its potency, purity, and flavor. Muha Meds Wifi OG cartridges latest CCELL are equipped with larger chambers and double the entry points, providing quicker effects. muha meds Wifi OG cartridges are made with ceramic heating elements for superior heat control, muha meds Wifi OG cartridges produces a flavorful fragrant, smooth vapor for a richer experience. The MuhaMeds Vape comes in both 500mg and 1g cartridges, which last ~150 and ~300 puffs each. Once finished, simply disconnect from the battery unit and dispose. Each 4-second activation yields ~3.5mg of cannabis oil.',
    description2:
      'Muha Meds Wifi OG cartridges come prefilled in Special low OHM tanks for optimum discretion and ease of use. Muha Meds cartridges are Universal for 510 threaded vaporizer pens or e-cigarette batteries. Dank-Vape Cartridges are also disposable, so you don’t have to deal with the hassle of loading and cleaning cartridges. Simply dispose of it after you are finished. Available as Half and Full Gram Cartridges',
  } as Product,
  {
    id: 'muha-meds-carts',
    name: 'Muha Meds Live Resin Cartridge',
    photo: 'assets/img/muha-meds/starburst.jpeg',
    category: 'muha_meds',
    prices: [
      { unit: '1 Cool Aid Live Resin Cartridge', amount: 45 },
      { unit: '1 Mogito Live Resin Cartridge', amount: 25 },
      { unit: 'Nesquik Live Resin Cartridge', amount: 25 },
      { unit: '1 Orange Bang Live Resin Cartridge', amount: 25 },
      { unit: '1 Pina Colada Live Resin Cartridge', amount: 25 },
      { unit: '1 Starburst Live Resin Cartridge', amount: 25 },
      { unit: '1 Strawberry Cough Live Resin Cartridge', amount: 25 },
      { unit: '1 Watermelon Live Resin Cartridge', amount: 25 },
      { unit: '1 WIFI OG Live Resin Cartridge', amount: 25 },
    ],
    description1:
      'Buy Muha Meds Cartridge online. Muha Meds cartridges oil is a 100% solvent-free cannabis concentrate, unmatched in its potency, purity, and flavor. Muha Meds cartridges latest CCELL are equipped with larger chambers and double the entry points, providing quicker effects. muha meds Live Resin cartridges are made with ceramic heating elements for superior heat control, Live Resin cartridges produces a flavorful fragrant, smooth vapor for a richer experience. The MuhaMeds Vape comes in both 500mg and 1g cartridges, which last ~150 and ~300 puffs each. Once finished, simply disconnect from the battery unit and dispose. Each 4-second activation yields ~3.5mg of cannabis oil.',
    description2:
      'Muha Meds cartridges come prefilled in Special low OHM tanks for optimum discretion and ease of use. Muha Meds cartridges are Universal for 510 threaded vaporizer pens or e-cigarette batteries. Dank-Vape Cartridges are also disposable, so you don’t have to deal with the hassle of loading and cleaning cartridges. Simply dispose of it after you are finished. Available as Half and Full Gram Cartridges',
  } as Product,
]

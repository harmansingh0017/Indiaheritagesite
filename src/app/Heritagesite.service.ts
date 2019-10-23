import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Heritagesites} from  './heritagesites';
import { Component, OnInit } from '@angular/core';

@Injectable()
export class HertiagesiteService {
           
    getProducts() {
            return [
            { 
                id: 1 ,
                imagemainUrl: "https://www.fodors.com/wp-content/uploads/2018/01/Taj-Mahal-FAQ-hero-1.jpg",
                image1Url: "https://media-cdn.tripadvisor.com/media/photo-s/13/17/b9/9e/tajmahal-inside-view.jpg",
                image2Url: "https://images.odysseytours.net/article/21000/a-view-of-the-taj-mahal-across-the-yamuna-river_18272.jpg",
                image3Url: "https://www.askideas.com/media/36/Sun-Light-Enters-Taj-Mahal-Inside-View.jpg",
                image4Url: "http://famouswonders.com/wp-content/uploads/2011/11/Mosque-interior-of-the-Taj-Mahal.jpg",
                image5Url: "https://www.travelogyindia.com/images/agra/inside-tajmahal.jpg",
                image6Url: "http://www.indiavirtualtour.com/TajMahal/TajImages/photoGallery/AgraFort/AgraFortExclusive521.jpg",
                HeritageName: "Taj Mahal",
                Location: "Agra",
                CreatedDate: new Date(1703,10,17),
                description: "One of Seven Wonders of the World, White Marble Mughal Architecture, the Taj Mahal was built by emperor Shah Jahan in the memory of his wife, Mumtaj Mahal. It is located at the bank of river Yamuna in Agra. It was completed in 1653 with the estimated cost of 32 million Indian rupees which would today stand up to 58 billion Indian rupees. It is considered as the best example of Mughal architecture worldwide and is called the “Jewel of Muslim Art in India”. This is probably the monument that is most recognised the world over for its association with the heritage of India",        
                rating: 4,
                numOfReviews: 2
            },
            {
                id: 2 ,
                imagemainUrl: "http://planetdens.com/image/Khajuraho-Temple-Madhy-pradesh.jpg",
                image1Url: "http://thinkingparticle.com/sites/default/files/imagecache/node-gallery-display/Erotic%20Art%20carvings%20at%20Khajuraho%20temple.JPG",
                image2Url: "https://templeszone.com/wp-content/uploads/edd/2019/07/Khajuraho-Monuments_040.jpg",
                image3Url: "https://www.culturalindia.net/iliimages/Khajuraho-Group-of-Monuments-ili-133-img-7.jpg",
                image4Url: "https://i2.wp.com/wiwigo.ml/blog/wp-content/uploads/2014/12/large_4474532905.jpg?resize=1024%2C683",
                image5Url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xryLyJ8d0SkeCxEHO1IrWRKU2mHRfDE4NGMhkIDDTMgPLWuX&s",
                image6Url: "https://qph.fs.quoracdn.net/main-qimg-ada3649f32e32764b5a2725cad014d3f.webp",
                HeritageName: "Khajuraho",
                Location: "Madhya Pradesh",
                CreatedDate: new Date(1616,10,17),
                description: "Located in Madhya Pradesh, Khajuraho is a famous UNESCO World Heritage site in India. Khajuraho is a unique heritage site which is renowned for a group of Hindu and Jain Temples situated 175 km south-east of Jhansi. They are well known for their Nagara style symbolism and erotic figures and sculptures. These sensuous stone carvings of human and animal form in erotic poses are very aesthetically portrayed and stand testimony to the rich cultural heritage of India.  Most of these monuments were built between 950 to 1050 CE under the reign of the Chandella dynasty. It consists of a total of 85 Temples spread across an area of 20 square kilometres. The Kandariya temple is the most prominent of all of these temples in the Khajuraho complex.",        
                rating: 5,
                numOfReviews: 2      
            },
            {   
                id: 3 ,              
                imagemainUrl: "https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Red-Fort_600-1280x720.jpg",
                image1Url: "https://delhiwalks.in/wp-content/uploads/2017/11/RED-FORT.jpg",
                image2Url: "https://static.toiimg.com/thumb/65666855/redfort2.jpg?width=748&height=499",
                image3Url: "http://www.deccanodysseytrains.com/blog/wp-content/uploads/2018/05/The-Shape-of-Red-Fort.jpg",
                image4Url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGNOiCmRySeLUYeRYJ3JQQmYvdmvS7O3nWFihRNuS3_sSoRk5Q5A&s",
                image5Url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQStRhqjhIuruz1JiDrfmS2h9g1vHyLqJQlNJWvI047scjCHwzJdA&s",
                image6Url: "https://content3.jdmagicbox.com/comp/delhi/l1/011pxx11.xx11.111116102233.h8l1/catalogue/red-fort-red-fort-delhi-tourist-attraction-17pa9dj.jpg",
                HeritageName: "Red Fort",
                Location: "Delhi",
                CreatedDate: new Date(1705,10,17),
                description: "Situated in the centre of the historic city of New Delhi, the Red Fort was built by Emperor Shah Jahan when he shifted his capital from Agra to Delhi, or what was known as Shahjahanabad at that time. The fort became the political hub of the Mughals. Under Shah Jahan, Mughal art and architecture reached its zenith, and the Red Fort is the perfect example of that. One can see the blending of Indo-Islamic, Timurid, Hindu and Persian forms of architecture in several facets of the Red Fort. It’s made up of red sandstone and houses several other smaller buildings such as the private pavilions, the Diwan-i-aam, the Diwan-i-Khas. The Red Fort is one of the most famous UNESCO World Heritage Sites in India and is managed directly by the Archaeological Survey of India.",        
                rating: 4,
                numOfReviews: 2
            },
            {
                id: 4 ,
                imagemainUrl: "https://image3.mouthshut.com/images/Restaurant/Photo/-69394_7837.jpg",
                image1Url: "https://i.ytimg.com/vi/Qb2JYJ6xaMM/maxresdefault.jpg",
                image2Url: "https://www.tripsavvy.com/thmb/6laWg1VQnmc8nrdtlLlUZ5IRf1M=/2121x1414/filters:fill(auto,1)/GettyImages-154908686-5b9e3f52c9e77c0057fb536f.jpg",
                image3Url: "https://images.thrillophilia.com/image/upload/s--gxttgSnR--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/012/843/original/1510820496_amber_fort.jpg.jpg?1510820496",
                image4Url: "https://www.swantour.com/blogs/wp-content/uploads/2018/09/Amer-Fort-Jaipur.jpg",
                image5Url: "https://cdn1.goibibo.com/t_tg_fs/jaipur-amer-fort-148133397356-orijgp.jpg",
                image6Url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdVtYmwW8rx7qNbA9rAS8ivTN5rECsONaVBrKuww52DkCXmEGD&s",
                HeritageName: "Amer Fort",
                Location: "Rajasthan",
                CreatedDate: new Date(1808,10,17),
                description: "Built-in the 3rd millennium BC in the memory of the kings, its an explicit example of beautiful Ancient Indian architecture. Constructed during the time of the Solanki dynasty, legend says that it was built in the honour and memory of Bhimdev 1, the son of the founder of the family, by his widowed queen Udayamati. It was recently declared as a UNESCO World Heritage site in 2014, owing to its architectural marvel and splendour. Rani-ki-vav is well known for its Stepped Corridors, Sculptures and Stone Carvings in the Well. Most of the sculptures in the well are devoted to Lord Vishnu in the form of his ten avatars, which signify his return to the world. Apart from being a place for storage of water, this vav also has a spiritual meaning attested to it. It is designed as an inverted temple and is divided into seven levels of wells, each having its own importance as per the religious and mythological works mentioned in the canonical literature.",        
                rating: 4,
                numOfReviews: 2
               },
               {
                id: 5 ,
                imagemainUrl: "https://www.elsetge.cat/myimg/f/63-639775_earth-jaipur-100-quality-hd-wallpapers-pink-city.jpg",
                image1Url: "https://www.treebo.com/blog/wp-content/uploads/2018/07/Webp.net-compress-image-3-29.jpg",
                image2Url: "https://www.businessinsider.in/thumb/msid-70125267,width-640,resizemode-4,imgsize-217465/in-1727-ce-rajput-rural-sawai-jai-singh-ii-he-also-gave-the-city-its-iconic-colour-which-led-to-its-fame-as-the-pink-city-.jpg",
                image3Url: "https://img.etimg.com/thumb/height-450,width-800,msid-70104165,imgsize-1445127/jaipur_gettyimages.jpg",
                image4Url: "http://www.indiatripplanners.com/blog/wp-content/uploads/2017/12/Pink-City-Jaipur-min-1.jpg",
                image5Url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/75/9c/70.jpg?fit=crop&w=320&h=140",
                image6Url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzApVvXiQpgfZe9hda1Gpb-3-Ex_cL88HkbArGBVBQrsg1R7Mr&s",
                HeritageName: "The Pink City",
                Location: "Jaipur",
                CreatedDate: new Date(1587,10,17),
                description: "With the newest addition to the list of UNESCO world heritage sites in India, Jaipur joined the club on 6th June 2019. It is one of the largest cities in India and is surrounded by walls and gates decorated with drawings on the backdrop of a beautiful pink hue, Jaipur, the pink city successfully manages to retain its old-world charm. Home to a few other UNESCO World Heritage sites including Amer Fort and Jantar Mantar, Jaipur is home to many magnificent forts, palaces, temples and museums. Jaipur is filled to the brim with bustling local bazaars where you can shop for local handicrafts and trinkets to your heart's content. Popular bazaars in the city include Bapu Bazaar, Tripolia Bazaar and Johri Bazaar.",        
                rating: 4,
                numOfReviews: 2
               },
               {
                id: 6 ,
                imagemainUrl: "https://images.thrillophilia.com/image/upload/s--9UJz8vla--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/003/780/original/rhio-kaziranga-1.JPG.jpg?1458193118",
                image1Url: "http://www.kaziranganationalpark-india.com/images/elephantsfari.jpg",
                image2Url: "https://images.thrillophilia.com/image/upload/s--9UJz8vla--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/003/780/original/rhio-kaziranga-1.JPG.jpg?1458193118",
                image3Url: "https://www.sentinelassam.com/wp-content/uploads/2018/12/c999d852a8bbebd4b4ac8034558bb64a.jpg",
                image4Url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-uBx_Ds-a8c9GOSyFFB1rNP5lgp2VosYiKCRr8LwVLHUn9zZ&s",
                image5Url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBua7QHsgxozETO2yE5U7Av_7_3cT9IxQJNy2KXFV3JkcMLIdR&s",
                image6Url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtw56SWe9GsKk4F8wvlx6WO8TChEBdq-whgF_iel-uBpPscWjE&s",
                HeritageName: "Kaziranga ",
                Location: "Assam",
                CreatedDate: new Date(1900,10,17),
                description: "Famous for its one horn rhinoceroses, Kaziranga Wildlife Sanctuary is located in Assam and is one of the untouched natural areas in India. It is said that this World Heritage Site in India, was a project initiated by Lord Curzon when his wife failed to see a single Rhinoceros in the region and urged her husband to take measured regarding the protection of these endangered species. This park lies on the flood plains of the river Brahmaputra and consists mainly of dense grasslands, forests and also has several streams and lakes running through it. Kaziranga contains about 15 endangered Indian faunal species, of which the Rhino is the most endangered. Other mammals include capped langur, hoolock gibbon, tiger, leopard, sloth bear, Ganges dolphin, otter, wild boar, water buffalo, gaur, sambar, swamp deer, hog deer and Indian muntjac.",        
                rating: 5,
                numOfReviews: 2
               }];
                  
             }

    
          }    

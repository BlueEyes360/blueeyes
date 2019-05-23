import React from 'react';

import ReactBnbGallery from 'react-bnb-gallery';

import { withRouter } from 'react-router-dom';

import './Gallery.css';

const photos = [
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20150701_103642.jpg?alt=media&token=dabd16eb-e305-4629-b8f0-a6f338d38538",
    caption: "Mount Rushmore",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20150701_103642.jpg?alt=media&token=0c22926e-f8b1-44c6-8259-271f78ec99f2",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20150701_103956.jpg?alt=media&token=63c96316-b8e8-4ca9-baa4-818325c8147f",
    caption: "Mount Rushmore",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20150701_103956.jpg?alt=media&token=68a085d1-ebd7-4daa-b15d-41cf67e922b4",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20150701_123739.jpg?alt=media&token=d8488531-be03-45e8-8d8e-0258e3c7d5b0",
    caption: "South Dakota",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20150701_123739.jpg?alt=media&token=993ef3f6-8579-4c5b-8231-76d54e02826a",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20150701_133750.jpg?alt=media&token=ada9620c-a68f-4746-a29c-276fa9303a21",
    caption: "South Dakota",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20150701_133750.jpg?alt=media&token=75860752-69ff-49ea-ac9a-3dd7e9f1a508",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20160403_144349.jpg?alt=media&token=3befd675-597a-46f5-8dcb-9faf3856bccf",
    caption: "Panama City Beach, Florida",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20160403_144349.jpg?alt=media&token=e5463a96-1c0b-4055-95dd-87d92a62b896",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20160529_112528.jpg?alt=media&token=5a7f5b68-6e65-454b-95a2-5578641998c2",
    caption: "Panama City Beach, Florida",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20160529_112528.jpg?alt=media&token=af084284-f03e-45a3-9af9-7abfa02c842e",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20170517_132819.jpg?alt=media&token=6680e582-25e9-4fc8-bb67-4c7899c22868",
    caption: "Bay County, Florida",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20170517_132819.jpg?alt=media&token=604ea322-b574-4f55-92ba-328dce03f354",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20170521_120159.jpg?alt=media&token=b95ce56f-1345-47bd-bdc8-63f051e520e7",
    caption: "Atlanta Aquarium",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20170521_120159.jpg?alt=media&token=51abcaec-a801-433a-9e6d-07a476c11315",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20170521_113959.jpg?alt=media&token=952da185-f248-4261-8a90-e245daf94c57",
    caption: "Atlanta Aquarium",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20170521_113959.jpg?alt=media&token=33542fca-98f9-44b6-ba1f-97af15246021",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20170603_110356.jpg?alt=media&token=a701402f-8963-4ded-a204-a69df61f7717",
    caption: "Grand Canyon",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20170603_110356.jpg?alt=media&token=118b3499-5529-4e33-9591-4d3437cefb81",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20170603_115834.jpg?alt=media&token=e590e1a8-fb43-44c2-8c40-cb10c112beed",
    caption: "Grand Canyon",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20170603_115834.jpg?alt=media&token=82a06012-aef2-45aa-bdc5-a09928d71006",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20170603_123417.jpg?alt=media&token=a64d5347-ebd1-4c24-9421-3d59bb169f35",
    caption: "Grand Canyon",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20170603_123417.jpg?alt=media&token=2544c134-4691-460d-926f-916f904fe15c",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20170603_123715.jpg?alt=media&token=f6f05a36-eca8-4e99-ab14-f036fdc3f569",
    caption: "Grand Canyon",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20170603_123715.jpg?alt=media&token=0fb4b90a-ad72-4cd3-8145-9207f83d6f2e",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20170603_124328.jpg?alt=media&token=4ece2531-154f-43a4-9b5e-ef000ced0673",
    caption: "Grand Canyon",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20170603_124328.jpg?alt=media&token=5a85fdfe-2764-46bb-881b-d5c2769d0fc1",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20170603_171553.jpg?alt=media&token=0913238e-ec66-44a1-841e-cdc4a76fb17c",
    caption: "Hoover Dam",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20170603_171553.jpg?alt=media&token=317461f0-3455-4c07-91d5-a80f727de843",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20170603_172214.jpg?alt=media&token=b87e09e1-5c7f-4629-bede-85942f454d26",
    caption: "Hoover Dam",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20170603_172214.jpg?alt=media&token=2c9c604b-8c1f-4541-8248-afc68a27de06",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20170603_234747.jpg?alt=media&token=ff6bf58c-e4b4-4223-87ad-cdc9498f18a4",
    caption: "Las Vegas",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20170603_234747.jpg?alt=media&token=f1cff0cf-1928-4011-8ee2-012b5de90529",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20170604_000316.jpg?alt=media&token=f147473c-9cc9-4c42-b978-6f48d10fa82f",
    caption: "Las Vegas",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20170604_000316.jpg?alt=media&token=6ba4d2c9-5e0d-426c-93f3-e0bed0fc5d05",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20170604_144932.jpg?alt=media&token=90e1c8fe-96cf-49b9-8d7b-255a52452463",
    caption: "Alien Highway",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20170604_144932.jpg?alt=media&token=b2b9ddfa-7786-4bf4-88d6-eaf0f76e96b9",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20170610_153429.jpg?alt=media&token=cb7ddd63-f2ca-4470-87a9-a9f901710950",
    caption: "Benton County, Washington",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20170610_153429.jpg?alt=media&token=3ae64f1e-4aef-4094-98f1-b1474a6725ca",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20170624_085125.jpg?alt=media&token=a7463195-57f6-4b8d-bd4f-cac86c361967",
    caption: "Mount Rainier, Washington",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20170624_085125.jpg?alt=media&token=825b4675-3926-4eb5-877c-3af69fa9b944",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20170624_104153.jpg?alt=media&token=8c9788e3-6c7b-46ac-9505-d5956297b0e8",
    caption: "Mount Rainier, Washington",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20170624_104153.jpg?alt=media&token=e05f221e-3abb-4d8c-aa66-0a01b3b60d55",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20170624_105543.jpg?alt=media&token=a2be904a-bada-43bb-9e1c-88a655415905",
    caption: "Mount Rainier, Washington",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20170624_105543.jpg?alt=media&token=b154c8ee-1669-42c9-b760-d76466488cec",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20170624_110151.jpg?alt=media&token=7a9518ff-5a07-4ef7-807d-e5eaa5609465",
    caption: "Mount Rainier, Washington",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20170624_110151.jpg?alt=media&token=283f3c56-1451-464c-8b7e-83c4aa55094e",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20170625_103423.jpg?alt=media&token=65e1a84b-f893-4548-9ad7-0d060458e195",
    caption: "Mount Rainier, Washington",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20170625_103423.jpg?alt=media&token=13b917c5-894b-4d25-8bfa-8c1be9850e9d",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20170625_103658.jpg?alt=media&token=0aee68fc-9dfd-4f9a-8283-105d2e894857",
    caption: "Mount Rainier, Washington",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20170625_103658.jpg?alt=media&token=c2dd956d-1c8c-45fb-84d8-8206d04e842c",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20170808_192117.jpg?alt=media&token=dd39548a-3dab-4008-a4df-226d6d060266",
    caption: "Bay outlook in Panama City Beach, Florida",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20170808_192117.jpg?alt=media&token=c00a99cb-c689-41da-970a-d1c33eec3fe5",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20171020_135226.jpg?alt=media&token=6661b1e1-bfb2-485e-8acb-4c47d371e915",
    caption: "Space Needle in Seattle, Washington",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20171020_135226.jpg?alt=media&token=713abed9-cb2d-4098-89b0-c51d195d4af0",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20171020_151843(0).jpg?alt=media&token=0b0be9a1-4290-4d21-ab20-0e19013e8b13",
    caption: "Butterflies at Science Museum in Seattle",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20171020_151843(0).jpg?alt=media&token=5b6f97f9-73ec-45f8-9a70-4d6a87fce4a4",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20180506_122121.jpg?alt=media&token=f7cc1ce0-1d15-4a42-952d-b10fe442ff46",
    caption: "Market at Seattle, Washington",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20180506_122121.jpg?alt=media&token=2cb7d084-ccd9-4819-add3-00354473da9c",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20180506_123209.jpg?alt=media&token=1b4b7d62-3fd6-442d-b33b-b1cf24594ceb",
    caption: "Skyline in Seattle, Washington",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20180506_123209.jpg?alt=media&token=fbb3a020-06ae-412b-b168-61e2c8c732a8",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20180506_123343.jpg?alt=media&token=cbe0149f-0f7b-4873-a29a-a5942a9d1bca",
    caption: "Puget Sound in Seattle, Washington",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20180506_123343.jpg?alt=media&token=9466d72c-6351-4499-9e16-064ecabe252e",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20180506_150747%20(2).jpg?alt=media&token=33dd8d2c-9669-4f07-ad1d-f2fc49085e8a",
    caption: "Drive to Seattle, Washington",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20180506_150747%20(2).jpg?alt=media&token=34075789-e552-496a-826f-25e54b6f6dd2",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20180513_132714.jpg?alt=media&token=c36567e9-3914-4dc4-87ed-eb793863e087",
    caption: "Colorado",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20180513_132714.jpg?alt=media&token=49147126-f749-4067-bcfa-1f97c5b05dfb",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20180709_173500(0).jpg?alt=media&token=0bc2588a-cc73-46e0-a462-f184bb991c5d",
    caption: "View from Mill Mountain in Roanoke, Virginia",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20180709_173500(0).jpg?alt=media&token=56f680c1-1e83-47b8-9a38-3b0687eac296",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20180709_173601.jpg?alt=media&token=0c4104f2-0d33-4d6d-9064-36ef3b1ac25e",
    caption: "Star on Mill Mountain in Roanoke, Virginia",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20180709_173601.jpg?alt=media&token=05d8daeb-107f-4759-8996-bc4d2f5b2aaf",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20180709_182326(1).jpg?alt=media&token=337db73a-cd0a-4ec1-b754-1a5dae2d6f68",
    caption: "Greenway in Roanoke, Virginia",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20180709_182326(1).jpg?alt=media&token=9a523dab-98ce-4a2c-8ab5-669b92074deb",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20180710_131352.jpg?alt=media&token=e54fb9f8-86c4-4249-97d7-622f69ae6b10",
    caption: "Hike in Virginia",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20180710_131352.jpg?alt=media&token=48d02c1b-9fc3-46d1-9a37-79573cc56a81",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20180710_131438.jpg?alt=media&token=c3989b8e-bc7d-48cd-b72d-97c2398bee1d",
    caption: "Hike in Virginia",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20180710_131438.jpg?alt=media&token=89bfb900-4533-4f08-ac5e-289605673ec8",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20180710_131451.jpg?alt=media&token=8a2fe265-324f-4ede-9132-186b179422a4",
    caption: "Hike in Virginia",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20180710_131451.jpg?alt=media&token=396f98ad-ec30-4bcf-b484-b7d7d896e785",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20180710_132812.jpg?alt=media&token=9b87cb90-e01e-4831-846b-387e56668062",
    caption: "Hike in Virginia",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20180710_132812.jpg?alt=media&token=91c127ab-bad5-4551-a0b8-2796ee0c7745",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20180710_133947.jpg?alt=media&token=e37c13be-f500-4499-856a-b756adea2cc5",
    caption: "Hike in Virginia",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20180710_133947.jpg?alt=media&token=c5817307-dbb6-4aab-a8a2-4d8143d79997",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20180710_142006.jpg?alt=media&token=27bdda2e-fb59-4e36-ade6-e8c778ad185b",
    caption: "Iron Forge in Virginia on Hike",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20180710_142006.jpg?alt=media&token=b169fe66-1084-436c-b238-09c60f90d0ee",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20180923_144045.jpg?alt=media&token=9250ef4a-9fb0-41b8-93bc-30af5592dbcf",
    caption: "Outlook in Richland, Washington",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20180923_144045.jpg?alt=media&token=c59cd946-090a-42ce-bcf2-767d8b7d1a6a",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20180929_222133.jpg?alt=media&token=00bab965-d61c-4215-aa21-99a6b3b90fc3",
    caption: "Seattle skyline at night",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20180929_222133.jpg?alt=media&token=e5993545-79b4-4eae-9331-8d935f6969d8",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20180930_113010.jpg?alt=media&token=a7769ca8-49c4-4e01-ab0e-2e4c226ea8ed",
    caption: "Seattle skyline",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20180930_113010.jpg?alt=media&token=ee137fc3-573c-4742-81fd-ef8fe766f3e4",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20181021_174034%20(2).jpg?alt=media&token=2372bc72-a529-419d-b226-32d0af178e97",
    caption: "Coding Cougs group for DubHacks 2018",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20181021_174034%20(2).jpg?alt=media&token=6190efe5-5dad-461f-910a-04e88d712be8",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20181223_223956%20(2).jpg?alt=media&token=8119d3e6-3af8-478d-a9b7-d376d5675ca6",
    caption: "Church in Roanoke, Virginia",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20181223_223956%20(2).jpg?alt=media&token=574399e7-eda7-413c-8cad-53dee13c729c",
},
{
    photo: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery%2F20190224_122513.jpg?alt=media&token=595c74bd-af96-4e7d-b0ae-0b1acd58dda7",
    caption: "Our Winning Team at Crimson Code 2019",
    subcaption: "Photo by Bobby Thompson",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/blueeyes-6ae51.appspot.com/o/gallery-thumbs%2F20190224_122513.jpg?alt=media&token=5cbc2685-3922-48a7-b716-b004db7cdd06",
}
];

const Gallery =  withRouter(({ history }) => {

    return (
        <ReactBnbGallery
            show="true"
            photos={photos}
            onClose={() => history.push('/')}
        />
    )
})

export default Gallery;
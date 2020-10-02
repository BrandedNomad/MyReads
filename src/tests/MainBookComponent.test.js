import React from 'react';
import {shallow} from '../enzyme';
import MainBookComponent from "../components/MainBookComponent";

const book={
    title: "React: Up & Running",
    subtitle: "Building Web Applications",
    authors: [
        "Stoyan Stefanov"
    ],
    publisher: "\"O'Reilly Media, Inc.\"",
    publishedDate: "2016-07-14",
    description: "Hit the ground running with React, the open-source technology from Facebook for building rich web applications fast. With this practical guide, Yahoo! web developer Stoyan Stefanov teaches you how to build components—React’s basic building blocks—and organize them into maintainable, large-scale apps. If you’re familiar with basic JavaScript syntax, you’re ready to get started. Once you understand how React works, you’ll build a complete custom Whinepad app that helps users rate wines and keep notes. You’ll quickly learn why some developers consider React the key to the web app development puzzle. Set up React and write your first \"Hello world\" web app Create and use custom React components alongside generic DOM components Build a data table component that lets you edit, sort, search, and export its contents Use the JSX syntax extension as an alternative to function calls Set up a lean, low-level build process that helps you focus on React Build a complete custom app that lets you store data on the client Use ESLint, Flow, and Jest tools to check and test your code as your app evolves Manage communication between components with Flux",
    industryIdentifiers: [
        {
            type: "ISBN_13",
            identifier: "9781491931776"
        },
        {
            type: "ISBN_10",
            identifier: "1491931779"
        }
    ],
    readingModes: {
        text: true,
        image: true
    },
    pageCount: 222,
    printType: "BOOK",
    categories: [
        "Computers"
    ],
    maturityRating: "NOT_MATURE",
    allowAnonLogging: true,
    contentVersion: "1.2.2.0.preview.3",
    panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
    },
    imageLinks: {
        smallThumbnail: "http://books.google.com/books/content?id=a_asDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
    },
    language: "en",
    previewLink: "http://books.google.com/books?id=a_asDAAAQBAJ&pg=PP1&dq=react&hl=&cd=6&source=gbs_api",
    infoLink: "https://play.google.com/store/books/details?id=a_asDAAAQBAJ&source=gbs_api",
    canonicalVolumeLink: "https://market.android.com/details?id=book-a_asDAAAQBAJ",
    id: "a_asDAAAQBAJ",
    shelf: "none"
}

test('should render main book view',()=>{
    const wrapper = shallow(<MainBookComponent book={book}/>)
    expect(wrapper).toMatchSnapshot()
})
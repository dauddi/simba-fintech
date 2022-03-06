import React from "react";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { SidebarWithHeader } from "../shared";

const Layout = ({ children }) => {
  return (
    <ChakraProvider>
        <Head>
        <title>Afrisend</title>
        <meta
            name="description"
            content="Admin software for freelancers and agencies"
        />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <SidebarWithHeader> {children} </SidebarWithHeader>

    </ChakraProvider>

  );
}

export default Layout;
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Stack,
  useDisclosure,
  Image,
  color,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import GamepadIcon from '@mui/icons-material/Gamepad';
import InfoIcon from '@mui/icons-material/Info';
import Swal from 'sweetalert2';
import axios from 'axios';



const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const handleSubmit = async () => {
    const { value: email } = await Swal.fire({
      title: 'Enter your email address',
      background: '#121212',
      color: '#ffffff',
      allowOutsideClick: false,
      input: 'email',
      inputLabel: 'Email address',
      inputPlaceholder: 'Enter your email address',
      inputAttributes: {
        required: 'required'
      },
      showCancelButton: true,
      confirmButtonText: 'Submit'
    });
  
    if (!email) {
      return; // User clicked cancel or closed the dialog
    }
  
    const { value: question } = await Swal.fire({
      title: 'Enter your question',
      background: '#121212',
      color: '#ffffff',
      allowOutsideClick: false,
      input: 'textarea',
      inputLabel: 'Question',
      inputPlaceholder: 'Enter your question here',
      inputAttributes: {
        required: 'required'
      },
      showCancelButton: true,
      confirmButtonText: 'Submit'
    });
  
    if (!question) {
      return; // User clicked cancel or closed the dialog
    }
  
    // Send data to SheetDB.io
    const data = {
      email: email,
      question: question
    };
    
    try {
      await axios.post('https://sheetdb.io/api/v1/ehutmmq2514x6', data);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Thank you for reaching out to us. Please note that we strive to provide timely and thorough responses to all inquiries, but response times may vary depending on the volume of requests we receive. Rest assured that we value your interest in our company and appreciate the opportunity to address any questions or concerns you may have. We look forward to connecting with you soon.',
        background: '#121212',
        color: '#ffffff',
        allowOutsideClick: false,
        confirmButtonText: 'Ok'
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'There was an Error Submitting Your request',
        background: '#121212',
        color: '#ffffff',
        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonText: 'Ok'
      });
    }
  };
  
  function handleInfoIconClick() {
    Swal.fire({
      title: 'Info & FAQ',
      text: '0xUFOs are collection of 851 No-fungible-Tokens with full commercial rights for Crypto and UFO enthusiasts. Colorful, Fully Animated and Highly Collectible ASCII art handcrafted by an experienced development team and 100% generated and stored on Ethereums Blockchain with 10^14 possible outcomes',
      background: '#121212',
      input: 'select',
      inputPlaceholder: 'FAQ',
      inputOptions: {
        'Utility & Roadmap': 'Utility & Roadmap - Learn more about the utility and roadmap of 0xUFOs',
        'Commercial Rights': 'Commercial Rights - Understand your benefits as a holder of 0xUFOs',
        'Minting Guide': 'How to Mint - Learn how to mint your own 0xUFOs',
        'Contact': 'Contact - Get in touch with the 0xUFOs team',
      },
      showCancelButton: false,
      confirmButtonText: 'Select',
      confirmButtonColor: '#2b2a2a',
      allowOutsideClick: false,
      
      
    }).then((result) => {
      if (result.isConfirmed) {
        const selectedOption = result.value;
        if (selectedOption === 'Utility & Roadmap') {
          // Hint to mint more cats
          Swal.fire({
            title: 'Utility & Roadmap',
            html:
            '<div>' +
            '<p>Thank you for your interest in 0xUFOs! Our team is working hard to develop new features and use cases for our NFTs.</p><br></br>' +
            '<h3 style="color: #c7fcbf;font-size: 24px;">0xAliens Collection</h3><br></br>' +
            '<p>We are excited to announce that we will be releasing a second NFT collection called 0xAliens. Each holder of 0xUFOs will be able to claim one 0xAlien for free for each 0xUFO that they hold. The second collection is currently in development and will be released in Phase 1 of our roadmap.</p><br></br>' +
            '<h3 style="color: #c7fcbf;font-size: 24px;">0xAlien Invasion Game</h3><br></br>' +
            '<p>One of our upcoming projects is a web3 game called 0xAlien Invasion. Players will be able to connect their wallets and utilize their own 0xUFO NFT to participate in the upcoming web3 game, 0x Alien Invasion. The game will feature a dynamic leaderboard, incentivizing users to compete for the highest scores. At the end of each month, prizes will be awarded to the top players with the highest scores.</p>' +
            '</div>',
            background: '#121212',
            color: '#ffffff',
            allowOutsideClick: false,
          }).then((result) => {
            if (result.isConfirmed) {
             // do something
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              // do something
            }
          });
        } else if (selectedOption === 'Commercial Rights') {
          // Hint to the next secret
          Swal.fire({
            title: 'Commercial Rights',
            html:
            '<div>' +
            '<h3 style="color: #c7fcbf;font-size: 24px;">Full IP Rights</h3><br></br>' +
            '<p>By owning a 0xUFO NFT, you will have access to the associated commercial rights of the digital asset. This means that you will have the ability to sell, license, and display your unique piece of digital art just like any other NFT. Owning a 0xUFO NFT enables holders to profit from their investments and share their digital asset with the world.</p>' +
            '</div>',
            background: '#121212',
            color: '#ffffff',
            allowOutsideClick: false,
          })
        } else if (selectedOption === 'Minting Guide') {
           Swal.fire({
            title: 'Minting Guide',
            html:
            '<div>' +
            '<p>Thank you for your interest in 0xUFOs! This is a simple guide on how you can purchase 0xUFOs NFTs.</p><br></br>' +
            '<h3 style="color: #c7fcbf;font-size: 24px;">Buying Ethereum</h3><br></br>' +
            '<p>To purchase Ethereum, you can create an account on a marketplace such as Coinbase. Once you have an account set up, you can connect your payment method, navigate to the “Buy/Sell” tab, select Ethereum, enter the amount of Ethereum you would like to purchase in USD, and confirm the transaction.</p><br></br>' +
            '<h3 style="color: #c7fcbf;font-size: 24px;">Installing MetaMask and Creating a Wallet</h3><br></br>' +
            '<p>To create a wallet, you can download the MetaMask extension for your web browser from the MetaMask website. Once installed, you can create a new wallet by following the prompts and set a password. After your wallet is created, you can add Ethereum by clicking on the “Deposit” button and following the prompts to connect your wallet to Coinbase or another exchange and transfer your Ethereum to your MetaMask wallet.</p><br></br>' +
            '<h3 style="color: #c7fcbf;font-size: 24px;">Minting a 0xUFO NFT</h3><br></br>' +
            '<p>To mint a 0xUFO NFT, go to the 0xUFOs website and click on the “Mint” button. Connect your MetaMask wallet to the website by clicking on the MetaMask icon and following the prompts. Enter the number of 0xUFO NFTs you would like to mint and confirm the transaction. Ensure that you have at least 0.01 ETH plus gas fees in your MetaMask wallet to cover the cost of the transaction. Wait for the transaction to complete, and your 0xUFO NFTs will be deposited into your MetaMask wallet.</p><br></br>' +
            '<p>Note: Gas fees are a necessary cost for Ethereum transactions, including minting 0xUFO NFTs. The fees vary depending on network congestion and can sometimes be quite high. To ensure you have enough funds to cover the fees, its recommended to have at least an extra $5-7 worth of ETH in your wallet in addition to the cost of the NFT itself. Additionally, its important to keep in mind that the gas fees are paid in ETH, not USD, so the amount of ETH required may fluctuate with the price of Ethereum.</p>' +
            '</div>',
            background: '#121212',
            color: '#ffffff',
            allowOutsideClick: false,
          })
        } 
        else if (selectedOption === 'Contact') {
         handleSubmit();
       } 
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Redirect the user to the main page
       
      }
      
    
    });
  }

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.leftPartition}>
         
        </div>
        <div className={styles.social}>
        <a href="/">
            <Image width={50} height={50} src="/gg2.svg" className={styles.socialicon2} />
          </a> 
          <a href="/listings">
            <Image width={75} height={75} src="/listnav2.svg" className={styles.socialicon} />
          </a>
          <a href="/gallery">
            <Image width={75} height={75} src="/galnav.svg" className={styles.socialicon} />
          </a>
          <a href="/contact">
            <Image width={75} height={75} src="/contnav.svg" className={styles.socialicon} />
          </a>
   
        </div>
        <div className={styles.rightPartition}>
    
        </div>
        <div className={styles.mobilePartition}>
          <IconButton
            aria-label="hamburger menu icon"
            icon={<HamburgerIcon />}
            colorScheme="white"
            onClick={onOpen}
          />
        </div>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent background="#00000042">
            <DrawerCloseButton />
            <DrawerBody>
              <Stack marginTop="20" spacing="24px">
                <Link href="/" passHref>
                  <button className={styles.button} onClick={onClose}>
                    HOME
                  </button>
                </Link>
                <Link href="/listings" passHref>
                  <button className={styles.button} onClick={onClose}>
                    LISTINGS
                  </button>
                </Link>
                <Link href="/gallery" passHref>
                  <button className={styles.button} onClick={onClose}>
                    GALLERY
                  </button>
                </Link>
                <Link href="/contact" passHref>
                  <button className={styles.button} onClick={onClose}>
                    CONTACT
                  </button>
                </Link>
                <Link href="/contact" passHref>
                  <button className={styles.button} onClick={onClose}>
                  <Image width={50} height={50} src="/facebookicon2.svg" className={styles.socialicon3} />
                  </button>
                </Link>
                <Link href="/contact" passHref>
                  <button className={styles.button} onClick={onClose}>
                  <Image width={50} height={50} src="/instagramicon.svg" className={styles.socialicon3} />
                  </button>
                </Link>
                <Link href="/contact" passHref>
                  <button className={styles.button} onClick={onClose}>
                  <Image width={50} height={50} src="/linkedinicon.svg" className={styles.socialicon3} />
                  </button>
                </Link>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default NavBar;

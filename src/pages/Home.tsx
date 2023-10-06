import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { BsArrowRight, BsBicycle, BsBoxArrowRight, BsBrush, BsDroplet, BsFillHouseFill, BsFillPersonFill, BsFlower1, BsGem, BsGiftFill, BsRepeat, BsScissors, BsTicketDetailed } from 'react-icons/bs'
import { FaPaw } from "react-icons/fa";


export function Home() {
  const userName = 'Bianca Carvalho';
  const userFirstName = userName.split(' ')[0];
  const userAbbreviation = userName
  .split(' ')
  .slice(0, 2)
  .map(nome => nome.charAt(0))
  .join('');
  
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  
  return (
    <>
      <header
      data-scrolled={scrolled}
      className={`w-full h-20 fixed z-50 transition-colors duration-150 bg-[#7092BF] data-[scrolled="true"]:border-b-2 border-white`}
    >
        <NavigationMenu className="h-full w-full max-w-[1240px] flex items-center justify-between mx-auto">
          <NavigationMenuLink href="#">
            <img src="./logo.svg" alt="Logo do pet-shop Oh My Dog" />
          </NavigationMenuLink>

          <NavigationMenuList className="flex gap-5">

            <NavigationMenuItem>
              <NavigationMenuLink href="#">
                <Button variant={"ghost"} className="text-white">
                  Serviços
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#">
                <Button variant={"ghost"} className="text-white">
                  Agendamento
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#">
                <Button variant={"ghost"} className="text-white">
                  Doações
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#">
                <Button variant={"ghost"} className="text-white">
                  Sobre nós
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#">
                <Button variant={"ghost"} className="text-white">
                  Contato
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>

          <NavigationMenuItem className="list-none relative">
            <NavigationMenuTrigger className="bg-transparent px-2 w-fit text-white">
              <Avatar className="mr-3 h-8 w-8">
                <AvatarImage src='src/assets/Bianca.jpg'/>
                <AvatarFallback>{userAbbreviation}</AvatarFallback>
              </Avatar>
              Olá, {userFirstName}
            </NavigationMenuTrigger>
            
            <NavigationMenuContent className="p-4 ">
              <ul className="flex flex-col gap-3 w-48">

                <NavigationMenuLink href="#">
                  <Button variant={"ghost"} className="w-full flex items-center justify-start gap-4 hover:bg-[#7092BF]/25">
                    <BsFillHouseFill className="w-4 h-4" />
                    Home
                  </Button>
                </NavigationMenuLink>
                
                <NavigationMenuLink href="#">
                  <Button variant={"ghost"} className="w-full flex items-center justify-start gap-4 hover:bg-[#7092BF]/25">
                    <BsFillPersonFill className="w-4 h-4" />
                    Meu perfil
                  </Button>
                </NavigationMenuLink>

                <NavigationMenuLink href="#">
                  <Button variant={"ghost"} className="w-full flex items-center justify-start gap-4 hover:bg-[#7092BF]/25">
                    <FaPaw className="w-4 h-4" />
                    Meus pets
                  </Button>
                </NavigationMenuLink>

                <NavigationMenuLink href="#">
                  <Button variant={"ghost"} className="w-full flex items-center justify-start gap-4 hover:bg-[#7092BF]/25">
                    <BsGiftFill className="w-4 h-4" />
                    Minhas doações
                  </Button>
                </NavigationMenuLink>

                <NavigationMenuLink href="#">
                  <Button variant={"ghost"} className="w-full flex items-center justify-start gap-4 text-red-600 hover:bg-red-600/10 hover:text-red-600 focus:bg-red-600/10">
                    <BsBoxArrowRight className="w-4 h-4" />
                    Sair
                  </Button>
                </NavigationMenuLink>
                
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
      </header>

      <main className="pt-20 bg-[#F2F2F2]">
        {/* Hero */}
        <section className="relative">
          <div className="flex">
            <div className="flex items-center w-full justify-between max-w-[1240px] mx-auto z-10">
              {/* left side */}
              <div className="flex flex-col gap-8 w-full max-w-[475px] ">
                <h1 className="text-white text-6xl font-medium leading-tight">Todo carinho que o seu pet precisa</h1>
                <p className="text-[#F8F8F8] text-xl leading-relaxed">Descubra o Oh My Dog, o pet-shop que oferece agendamentos de serviços como banho, tosa, spa e mais. Agende agora mesmo!</p>

                <Button variant={"outline"} className="w-full max-w-[240px] py-5 text-[#F8F8F8] rounded-full">
                  Veja mais
                </Button>
              </div>

              {/* right side */}
              <img src="./src/assets/home-hero.png" alt="" className="max-w-[600px]"/>
            </div>

            {/* background */}
            <div className="absolute top-0 left-0 h-[130%] w-full bg-[#7092BF]" />
          </div>
        </section>

        {/* Services */}
        <section className="relative z-20 bg-[#FCFCFC] mt-20 mx-8 rounded-[40px]">
          <div className="w-full max-w-[1240px] mx-auto py-16">
            <h2 className="text-6xl font-medium leading-tight max-w-3xl">Serviços que oferecemos ao seu pet.</h2>
            <p className="text-xl leading-relaxed max-w-5xl mt-8 mb-16">Descubra os serviços excepcionais do Oh My Dog! Oferecemos banho, tosa, spa e muito mais. Nossa equipe dedicada garantirá que seu pet receba o melhor tratamento.</p>

            {/* cards */}
            <div className="grid grid-cols-3 grid-rows-2 gap-11">

              <Card className="shadow-lg">
                <CardHeader>
                  <div className="w-fit bg-[#7092BF] p-4 rounded-lg">
                    <BsDroplet className="h-9 w-9 text-[#F2F2F2]"/>
                  </div>
                  <CardTitle className="py-6 text-2xl font-medium">Banho</CardTitle>
                  <CardDescription className="text-base text-black leading-snug">Serviço de banho especializado para garantir que o seu pet receba cuidados de higiene e se sinta revigorado</CardDescription>
                </CardHeader>

                <CardContent>
                  <Button variant={"link"} className="text-xl p-0 flex items-center justify-center gap-3">
                    Ver mais

                    <BsArrowRight className="h-5 w-5"/>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="w-fit bg-[#7092BF] p-4 rounded-lg">
                    <BsScissors className="h-9 w-9 text-[#F2F2F2]"/>
                  </div>
                  <CardTitle className="py-6 text-2xl font-medium">Tosa</CardTitle>
                  <CardDescription className="text-base text-black leading-snug">No Oh My Dog, oferecemos um serviço de tosa profissional para deixar o seu pet com um visual impecável.</CardDescription>
                </CardHeader>

                <CardContent>
                  <Button variant={"link"} className="text-xl p-0 flex items-center justify-center gap-3">
                    Ver mais

                    <BsArrowRight className="h-5 w-5"/>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <div className="w-fit bg-[#7092BF] p-4 rounded-lg">
                    <BsGem className="h-9 w-9 text-[#F2F2F2]"/>
                  </div>
                  <CardTitle className="py-6 text-2xl font-medium">Tosa Higiênica</CardTitle>
                  <CardDescription className="text-base text-black leading-snug">serviço de tosa higiênica para assegurar o máximo conforto e higiene do seu tanto amado pet.</CardDescription>
                </CardHeader>

                <CardContent>
                  <Button variant={"link"} className="text-xl p-0 flex items-center justify-center gap-3">
                    Ver mais

                    <BsArrowRight className="h-5 w-5"/>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <div className="w-fit bg-[#7092BF] p-4 rounded-lg">
                    <BsFlower1 className="h-9 w-9 text-[#F2F2F2]"/>
                  </div>
                  <CardTitle className="py-6 text-2xl font-medium">Spa</CardTitle>
                  <CardDescription className="text-base text-black leading-snug">Serviços de spa especiais para proporcionar momentos de relaxamento e cuidados extras ao seu querido pet</CardDescription>
                </CardHeader>

                <CardContent>
                  <Button variant={"link"} className="text-xl p-0 flex items-center justify-center gap-3">
                    Ver mais

                    <BsArrowRight className="h-5 w-5"/>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <div className="w-fit bg-[#7092BF] p-4 rounded-lg">
                    <BsBrush className="h-9 w-9 text-[#F2F2F2]"/>
                  </div>
                  <CardTitle className="py-6 text-2xl font-medium">Tingimentos de pelos</CardTitle>
                  <CardDescription className="text-base text-black leading-snug">Exclusivo serviço de tingimento de pelos para deixar o seu pet com um visual único e estiloso.</CardDescription>
                </CardHeader>

                <CardContent>
                  <Button variant={"link"} className="text-xl p-0 flex items-center justify-center gap-3">
                    Ver mais

                    <BsArrowRight className="h-5 w-5"/>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <div className="w-fit bg-[#7092BF] p-4 rounded-lg">
                    <BsRepeat className="h-9 w-9 text-[#F2F2F2]"/>
                  </div>
                  <CardTitle className="py-6 text-2xl font-medium">Aluguel de equipamentos</CardTitle>
                  <CardDescription className="text-base text-black leading-snug">Oferecemos um serviço dedicado ao aluguel de equipamentos e aparatos para seu pet, como gaiolas de transportes, carrinho e etc.</CardDescription>
                </CardHeader>

                <CardContent>
                  <Button variant={"link"} className="text-xl p-0 flex items-center justify-center gap-3">
                    Ver mais

                    <BsArrowRight className="h-5 w-5"/>
                  </Button>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="bg-[#EAEFF6] pt-64 pb-20 -mt-40">
          <div className="w-full max-w-[1240px] mx-auto flex flex-col">
            {/* Texts */}
            <div>
              <h3 className="text-6xl font-medium leading-tight">Conheça como trabalhamos.</h3>
              <p className="text-xl leading-relaxed mt-8 mb-16">Cada serviço é adaptado às necessidades individuais do seu amiguinho, proporcionando uma experiência única e personalizada. Confie no Oh My Dog para cuidar do seu pet com excelência e dedicação.</p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-8">
              
              <Card className="shadow-lg">
              <CardHeader>
                <div className="w-fit bg-[#7092BF] p-4 rounded-lg">
                  <BsTicketDetailed className="h-9 w-9 text-[#F2F2F2]"/>
                </div>
                <CardTitle className="pt-6 text-2xl font-medium">1. Agendamento</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-base text-black leading-snug">
                  Agende seus serviços no Oh My Dog e ofereça ao seu pet um cuidado personalizado e conveniente, com horários que se adequam à sua rotina.
                </p>
              </CardContent>
              </Card>

              <Card className="shadow-lg">
              <CardHeader>
                <div className="w-fit bg-[#7092BF] p-4 rounded-lg">
                  <BsBicycle className="h-9 w-9 text-[#F2F2F2]"/>
                </div>
                <CardTitle className="pt-6 text-2xl font-medium">2. Levar ao Oh my Dog</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-base text-black leading-snug">
                  Visite o pet-shop e traga seu amado pet para desfrutar de um atendimento especializado e acolhedor, proporcionando uma experiência tranquila e confortável.
                </p>
              </CardContent>
              </Card>

              <Card className="shadow-lg">
              <CardHeader>
                <div className="w-fit bg-[#7092BF] p-4 rounded-lg">
                  <BsTicketDetailed className="h-9 w-9 text-[#F2F2F2]"/>
                </div>
                <CardTitle className="pt-6 text-2xl font-medium">3. Buscar o pet</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-base text-black leading-snug">
                  Após o serviço, você irá buscar seu pet e levá-lo de volta para casa, garantindo sua comodidade e a continuidade do cuidado personalizado que oferecemos.
                </p>
              </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="pt-20 pb-40">
          <div className="w-full max-w-[1240px] mx-auto">
            {/* Texts */}
            <div>
              <h3 className="text-6xl font-medium leading-tight text-center max-w-2xl mx-auto">Depoimento de quem já passou por aqui</h3>
              <p className="text-xl leading-relaxed text-center mt-8 mb-20 max-w-6xl mx-auto">
                Veja o que nossos clientes têm a dizer sobre o Oh My Dog! Leia os depoimentos e testemunhos de satisfação, onde os donos compartilham suas experiências positivas com nossos serviços. Venha fazer parte da nossa comunidade de clientes felizes e confie no Oh My Dog para cuidar do seu pet com excelência e carinho.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-2 gap-12">
              
              <Card className="shadow-lg">
                <CardContent className="grid gap-6 px-10 py-8">
                  <p className="text-base text-black leading-relaxed">
                    "Estou extremamente satisfeito com os serviços prestados pelo Oh My Dog! A equipe foi incrível em todos os aspectos, desde o atendimento cordial até a habilidade profissional. Meu pet voltou para casa radiante e feliz após receber um banho e tosa excepcionais."
                  </p>

                  <div className="flex items-center gap-4">
                    <img src="src/assets/home/user1.png" alt="" className="rounded-full"/>
                    <span>Joe Paul</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg">
                <CardContent className="grid gap-6 px-10 py-8">
                  <p className="text-base text-black leading-relaxed">
                    "Maravilhada com o resultado do tingimento de pelos que o Oh My Dog realizou no meu pet! A equipe foi extremamente profissional e cuidadosa, garantindo que o processo fosse seguro e confortável para o meu pet. O resultado final foi além das minhas expectativas."
                  </p>

                  <div className="flex items-center gap-4">
                    <img src="src/assets/home/user2.png" alt="" className="rounded-full"/>
                    <span>Larissa de Souza</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg">
                <CardContent className="grid gap-6 px-10 py-8">
                  <p className="text-base text-black leading-relaxed">
                    "Fiquei absolutamente encantada com a experiência de spa que o meu pet teve no Oh My Dog! A equipe foi além das minhas expectativas, oferecendo um tratamento de luxo e bem-estar para o meu amado companheiro. Saímos do spa com um pet renovado e radiante."
                  </p>

                  <div className="flex items-center gap-4">
                    <img src="src/assets/home/user3.png" alt="" className="rounded-full"/>
                    <span>Bianca Aparecida</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg">
                <CardContent className="grid gap-6 px-10 py-8">
                  <p className="text-base text-black leading-relaxed">
                    "Impressionado com a qualidade da tosa que o Oh My Dog realizou no meu pet! A equipe demonstrou habilidade excepcional e cuidado minucioso durante todo o processo. Meu pet voltou para casa com um visual impecável, com pelos bem aparados."
                  </p>

                  <div className="flex items-center gap-4">
                    <img src="src/assets/home/user4.png" alt="" className="rounded-full"/>
                    <span>Anderson Pereira</span>
                  </div>
                </CardContent>
              </Card>


            </div>
            

          </div>
        </section>
      </main>
    </>
  )
}
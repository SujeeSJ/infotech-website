import MotionDiv from "@/components/MotionDiv";


export default function Results({
  project,
}: {
  project:any;
}) {


const results = [

{
number:"01",
metric:"100%",
title:"Professional Digital Presence",
text:
"Created a modern platform that represents the quality and energy of the OMG Arcade brand."
},


{
number:"02",
metric:"360°",
title:"Complete Experience Showcase",
text:
"Presented gaming, VR, racing and entertainment services through one connected digital experience."
},


{
number:"03",
metric:"24/7",
title:"Customer Accessibility",
text:
"Enabled customers to discover services and brand information anytime across devices."
}


];



return (

<section className="bg-black py-32 text-white">


<div className="mx-auto max-w-7xl px-6">



{/* Header */}


<div className="max-w-5xl">


<p className="
text-sm
uppercase
tracking-[0.35em]
text-orange-400
">

Project Impact

</p>



<h2 className="
mt-8
text-5xl
font-semibold
leading-tight
md:text-7xl
">

Creating a digital experience
built for growth.

</h2>



<p className="
mt-8
max-w-3xl
text-xl
leading-relaxed
text-white/60
">

The goal was to transform the brand's online presence
into a premium experience that connects with customers.

</p>


</div>







{/* Results */}



<div className="
mt-20
grid
gap-6
md:grid-cols-3
">


{
results.map((item,index)=>(


<MotionDiv

key={item.number}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*0.15
}}

whileHover={{
y:-10
}}

className="
rounded-[35px]
border
border-white/10
bg-white/5
p-10
backdrop-blur
"

>


<p className="
text-sm
text-orange-400
">

{item.number}

</p>




<h3 className="
mt-10
text-6xl
font-semibold
">

{item.metric}

</h3>




<h4 className="
mt-6
text-2xl
font-semibold
">

{item.title}

</h4>




<p className="
mt-5
leading-relaxed
text-white/60
">

{item.text}

</p>



</MotionDiv>


))
}



</div>




</div>


</section>


)

}
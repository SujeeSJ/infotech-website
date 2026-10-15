import MotionDiv from "@/components/MotionDiv";


export default function Testimonial({
  project,
}: {
  project:any;
}) {


return (

<section className="py-32">


<div className="mx-auto max-w-7xl px-6">



<MotionDiv

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

className="
relative
overflow-hidden
rounded-[50px]
bg-neutral-100
p-10
md:p-20
"

>


{/* Quote mark */}

<div
className="
absolute
right-10
top-0
text-[180px]
font-serif
text-black/5
"
>

"

</div>





<p
className="
text-sm
uppercase
tracking-[0.35em]
text-orange-500
"
>

Client Experience

</p>




<h2
className="
relative
mt-10
max-w-5xl
text-4xl
font-semibold
leading-tight
md:text-6xl
"
>

" Infinotech helped transform our
vision into a modern digital experience
that represents our brand professionally. "

</h2>





<div
className="
mt-14
flex
items-center
gap-5
border-t
border-black/10
pt-8
"
>


<div
className="
flex
h-14
w-14
items-center
justify-center
rounded-full
bg-black
text-white
font-semibold
"
>

O

</div>




<div>

<p className="font-semibold">

{project.client}

</p>


<p className="text-black/50">

Project Partner

</p>


</div>



</div>




</MotionDiv>



</div>


</section>


)

}
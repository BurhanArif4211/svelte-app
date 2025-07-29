<script>
    import Card from "../components/Card.svelte";
    import Tabletdisplay from "../components/Tabletdisplay.svelte";
</script>
<div
    class="w-full h-[30vh] p-[12rem] bg-[#260138] flex items-center justify-center"
>
    <Card
        size="lg"
        type="custom"
        customBg="bg-gradient-to-tr from-[#ae00ff] to-[#d900ff]"
    >
        <div class="text-3xl">Find Me</div>
        <Tabletdisplay
            items={[
                {
                    link: "https://instagram.com/iam.burhanarif",
                    text: "Instagram",
                    icon: "/img/instagram.svg",
                },
                {
                    link: "https://linkedin.com/in/that-burhan/",
                    text: "LinkedIn",
                    icon: "/img/linkedin.svg",
                },
                {
                    link: "https://youtube.com/@iam.burhan",
                    text: "YouTube",
                    icon: "/img/youtube.svg",
                },
            ]}
        ></Tabletdisplay>
    </Card>
</div>
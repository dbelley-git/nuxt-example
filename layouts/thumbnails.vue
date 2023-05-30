<template>
    <SiteHeader />
    <main>
        <div class="container px-4 py-5" id="custom-cards">
            <br />
            <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                <slot />
            </div>
        </div>
    </main>
    <SiteFooter />
</template>
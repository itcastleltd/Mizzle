<template>
  <StickyHeader class-name="header-absolute">
    <nav class="navbar navbar-expand-xl">
      <b-container>
        <LogoBox class-name="me-0" />

        <AppMenu showMegaMenu showContactUs ul-class="mx-auto" />

        <ul class="nav align-items-center dropdown-hover ms-sm-2">
          <ThemeToggleDropdown />

          <li class="nav-item me-2 d-none d-sm-block">
            <router-link
              :to="{ name: 'auth.sign-in' }"
              class="btn btn-sm btn-light mb-0 icons-center"
            >
              <BIconPersonCircle class="me-1" />
              Sign up
            </router-link>
          </li>
          <li class="nav-item d-none d-sm-block">
            <router-link :to="{ name: 'contact.v1' }" class="btn btn-sm btn-primary mb-0">Get a Quote!</router-link>
          </li>
          <li class="nav-item">
            <MobileNavbarToggler />
          </li>
        </ul>
      </b-container>
    </nav>
  </StickyHeader>
</template>

<script lang="ts" setup>
import LogoBox from '@/components/topbar/LogoBox.vue'
import StickyHeader from '@/components/topbar/StickyHeader.vue'
import ThemeToggleDropdown from '@/components/topbar/ThemeToggleDropdown.vue'
import MobileNavbarToggler from '@/components/topbar/MobileNavbarToggler.vue'
import { BIconPersonCircle } from 'bootstrap-icons-vue'
import AppMenu from '@/components/topbar/AppMenu/index.vue'
import { buyLink } from '@/helpers'
</script>

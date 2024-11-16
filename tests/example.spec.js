import {test, expect} from '@playwright/test'
import { beforeEach, describe } from 'node:test'

describe('Blogs App', ()=>{

  beforeEach(async()=>{
    await page.goto(`http://localhost:5173/`)
  })
  
  test('Frontend page can be opened', async({page})=>{
    const locator = await page.getByText('Login')
    await expect(locator).toBeVisible()
  })
  test('Login form can be opened', async({page})=>{
    await page.getByRole('button', {name:'Login'}).click()
    const locator =await page.getByText('Login to app')
    await expect(locator).toBeVisible()

    await page.getByRole('textbox').first().fill('Anibru')
    await page.getByRole('textbox').last().fill('daniel211004')
    await page.getByRole('button', {name:"Login"}).click()

    const message =  await page.getByText('Error: Invalid username or password')
    await expect(message).toBeVisible()
  })

})
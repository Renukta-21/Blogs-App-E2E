import {test, expect, describe, beforeEach} from '@playwright/test'

describe('Blogs App', ()=>{

  beforeEach(async({page})=>{
    await page.goto(`http://localhost:5173/`)
  })
  describe('login to app',()=>{
    test('fails with incorrect credentials', async({page})=>{
      const locator = await page.getByText('Login')
      await expect(locator).toBeVisible()
  
      await locator.click()
      await expect(page.getByText('login to app')).toBeVisible()
  
      await page.getByRole('textbox').first().fill('Hola')
      await page.getByRole('textbox').last().fill('tonoto')
      await page.getByRole('button', {name:'Login'}).click()
      
      await expect(page.getByText('Error')).toBeVisible()
    })
  })

})
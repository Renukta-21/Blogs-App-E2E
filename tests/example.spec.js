import {test, expect} from '@playwright/test'
import { describe } from 'node:test'

describe('Blogs App', ()=>{
  test('Frontend page can be opened', async({page})=>{
    await page.goto(`http://localhost:5173/`)
  
    const locator = await page.getByText('Loin')
    await expect(locator).toBeVisible()
  
  })


})
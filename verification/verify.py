from playwright.sync_api import sync_playwright

def verify_homepage():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # Wait for the server to be ready
            page.goto("http://localhost:3000")
            page.wait_for_timeout(5000) # Wait for animations

            # Take screenshot
            page.screenshot(path="verification/homepage.png", full_page=True)
            print("Screenshot taken successfully")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_homepage()

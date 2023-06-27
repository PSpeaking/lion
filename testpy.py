import pygame

pygame.init()

width, height = 640, 480
screen = pygame.display.set_mode((width, height))
clock = pygame.time.Clock()

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    screen.fill((0, 0, 0))

    pygame.draw.rect(screen, (255, 255, 255), pygame.Rect(100, 100, 200, 200))

    pygame.display.flip()
    clock.tick(60)

pygame.quit()
